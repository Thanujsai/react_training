// import React, { useState } from 'react'
// import {Input,Button,Alert} from 'antd'
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const { TextArea } = Input;
// var user={}

// function Loginn() {
//     var [email,setEmail] = useState("");
//     var [password,setPassword] = useState("");
//     var navigate = useNavigate();//to navigate to other pages
//     var [error,setError] = useState("")

//     function LoginApi(){
//         console.log("user is",user)
//         axios({
//             url:"http://apibyauw.eu-4.evennode.com/api"+"/login",
//             method:"post",
//             data:{email,password}
//         }).then((response) => {
//             // setCakes(response.data.data)
//             console.log("response coming from login api ",response.data.data)
//             navigate("/bakery")
//         }, (error) => {
//             console.log("error from login api",error)
//         })
//     }
//     function changeEmail(e){
//         console.log("event")
//         var a = e.target.value;
//         user.email=a;
//         console.log(a)
//         setEmail(a)
//     }

//     function changePassword(e){
//         console.log("event")
//         var a = e.target.value;
//         user.passWord = a;
//         console.log(a)
//         setPassword(a)
//     }

//     function click(){
//         console.log("email is",email)
//         console.log(email)
//         if(email == 'thanuj.sai14301@gmail.com' && password == 'thanuj'){
//             console.log("in success")
//             navigate("/bakery")
//         }
//         else{
//             console.log("in error")
//             setError("Invalid credentials")
//             console.log("error",error)
//         }
//         // return(<>
//         // {
//         //     error == '******dobbey******' && <Alert type="error" message={error}/>
//         // }
//         // </>)
//     }

//   return (
//     <div>
        
//         {error == 'Invalid credentials' && <Alert type="error" message={error}/>}
//         <input placeholder="Email" type="text" onChange={changeEmail}></input><br></br>
//         <input placeholder="Password" type="password" onChange={changePassword}></input><br></br><br></br>
//         <Button onClick={LoginApi}>Login</Button>
//         {/* <Button onClick={LoginApi}>Hit API</Button> */}
//         <Link to="/forgot"><Button>Forgot</Button></Link>
//     </div>
//   )

// // return (
// //     <>
// //       <TextArea placeholder="Autosize height based on content lines" autoSize />
// //       <div style={{ margin: '24px 0' }} />
// //       <TextArea
// //         placeholder="Autosize height with minimum and maximum number of lines"
// //         autoSize={{ minRows: 2, maxRows: 6 }}
// //       />
// //       <div style={{ margin: '24px 0' }} />
// //     </>
// //   );
// }

// export default Loginn


// // import { Alert, Button } from "antd";
// // import axios from "axios";
// // import { Link, useNavigate } from "react-router-dom";

// // export default function Login() {

// //   // variable student is created JSON Object
// //   var user = {};

// //   var navigate = useNavigate();

// //   function loginUser() {
// //     axios({
// //       url: "http://apibyauw.eu-4.evennode.com/api/login",
// //       method: "post",
// //       data: user
// //     }).then((response) => {
// //       debugger;
// //       console.log('Login successfull', response);
// //       localStorage.token = response.status === 200 ? response.data.token : null;
// //       if (response.status === 200) navigate('/');
// //     }, (error) => {
// //       Alert('Invalid Credentials');
// //       localStorage.token = null;
// //     })
// //   }

// //   function handlePassword(event) {
// //     user.password = event.target.value;
// //   }

// //   function handleEmail(event) {
// //     user.email = event.target.value;
// //   }

// //   if (!localStorage.token) {
// //     debugger;
// //     navigate('/login');
// //     return null;
// //   }

// //   return (
// //     <>
// //       User ID: <input type="text" placeholder="Email" onChange={handleEmail}></input>
// //       <br />
// //       Password: <input type="password" placeholder="Password" onChange={handlePassword}></input>
// //       <br />
// //       <br />
// //       <Button onClick={loginUser} type="primary">Login In</Button>
// //       <br />
// //       <br />
// //       <Link to='/signup'><Button type="primary">Sign Up</Button></Link>&nbsp;&nbsp;&nbsp;
// //       <Link to='/forgot'><Button type="primary">Forgot Password?</Button></Link>
// //       <br />
// //       <br />
// //     </>
// //   )
// // }

import { Alert, Button } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

  // variable student is created JSON Object
  var user = {};

  var navigate = useNavigate();

  function loginUser() {
    axios({
      url: "http://apibyauw.eu-4.evennode.com/api/login",
      method: "post",
      data: user
    }).then((response) => {
      console.log('Login successfull', response);
      localStorage.token = response.status === 200 ? response.data.token : null;
      if (response.status === 200) navigate('/bakery');
    }, (error) => {
      Alert('Invalid Credentials');
      localStorage.token = null;
    })
  }

  function handlePassword(event) {
    user.password = event.target.value;
  }

  function handleEmail(event) {
    user.email = event.target.value;
  }

  if (!localStorage.token) {
    debugger;
    navigate('/login');
    return null;
  }

  return (
    <>
      Email: <input type="text" placeholder="Email" onChange={handleEmail}></input>
      <br />
      Password: <input type="password" placeholder="Password" onChange={handlePassword}></input>
      <br />
      <br />
      <Button onClick={loginUser} type="primary">Login</Button>
      <br />
      <br />
      <Link to='/signup'><Button type="primary">Sign Up</Button></Link>&nbsp;&nbsp;&nbsp;
      <Link to='/forgot'><Button type="primary">Forgot Password?</Button></Link>
      <br />
      <br />
    </>
  )
}