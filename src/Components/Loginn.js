import { Alert, Button, Input } from "antd";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  const loginUser = () => {
    axios({
      url: "http://apibyauw.eu-4.evennode.com/api/login",
      method: "post",
      data: { email, password }
    }).then((response) => {
      console.log('Login successful', response);
      localStorage.token = response.status === 200 ? response.data.token : null;
      if (response.status === 200) navigate('/bakery');
      else setError("Invalid Credentials");
    }).catch((error) => {
      console.log('Error from login API', error);
      setError("Invalid Credentials");
      localStorage.token = null;
    });
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <>
      {error && <Alert type="error" message={error} />}
      Email: <input type="text" placeholder="Email" onChange={handleEmailChange} />
      <br />
      <div className="flex items-center justify-center">
        Password: <input type={showPassword ? "text" : "password"} placeholder="Password" onChange={handlePasswordChange} />
        <div className="-ml-10 cursor-pointer" onClick={handleClick}>
          {showPassword ? <EyeOff /> : <Eye />}
        </div>
      </div>
      <br />
      <Button onClick={loginUser} type="primary">Login</Button>
      <br />
      <br />
      <Link to='/signup'><Button type="primary">Sign Up</Button></Link>&nbsp;&nbsp;&nbsp;
      <Link to='/forgot'><Button type="primary">Forgot Password?</Button></Link>
    </>
  );
}
