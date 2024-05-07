import React, { useState } from 'react'
import {Input,Button,Alert} from 'antd'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const { TextArea } = Input;
var user={}

function Loginn() {
    var [email,setEmail] = useState("");
    var [password,setPassword] = useState("");
    var navigate = useNavigate();//to navigate to other pages
    var [error,setError] = useState("")

    function LoginApi(){
        console.log("user is",user)
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/login",
            method:"post",
            data:{email,password}
        }).then((response) => {
            // setCakes(response.data.data)
            console.log("response coming from login api ",response.data.data)
            navigate("/bakery")
        }, (error) => {
            console.log("error from login api",error)
        })
    }
    function changeEmail(e){
        console.log("event")
        var a = e.target.value;
        user.email=a;
        console.log(a)
        setEmail(a)
    }

    function changePassword(e){
        console.log("event")
        var a = e.target.value;
        user.passWord = a;
        console.log(a)
        setPassword(a)
    }

    function click(){
        console.log("email is",email)
        console.log(email)
        if(email == 'thanuj.sai14301@gmail.com' && password == 'thanuj'){
            console.log("in success")
            navigate("/bakery")
        }
        else{
            console.log("in error")
            setError("Invalid credentials")
            console.log("error",error)
        }
        // return(<>
        // {
        //     error == '******dobbey******' && <Alert type="error" message={error}/>
        // }
        // </>)
    }

  return (
    <div>
        
        {error == 'Invalid credentials' && <Alert type="error" message={error}/>}
        <input placeholder="Email" type="text" onChange={changeEmail}></input><br></br>
        <input placeholder="Password" type="password" onChange={changePassword}></input><br></br><br></br>
        <Button onClick={LoginApi}>Login</Button>
        {/* <Button onClick={LoginApi}>Hit API</Button> */}
        <Link to="/forgot"><Button>Forgot</Button></Link>
    </div>
  )

// return (
//     <>
//       <TextArea placeholder="Autosize height based on content lines" autoSize />
//       <div style={{ margin: '24px 0' }} />
//       <TextArea
//         placeholder="Autosize height with minimum and maximum number of lines"
//         autoSize={{ minRows: 2, maxRows: 6 }}
//       />
//       <div style={{ margin: '24px 0' }} />
//     </>
//   );
}

export default Loginn
