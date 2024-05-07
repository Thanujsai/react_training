import React from 'react'
import {Input,Button,Alert} from 'antd'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Signupp() {
  var [name,setName] = useState("");
  var [email,setEmail] = useState("");
  var [password,setPassword] = useState("");

  function CreateAccount(){
    console.log(name,' ',email,' ',password)
    axios({
        url:"http://apibyauw.eu-4.evennode.com/api"+"/register",
        method:"post",
        data:{name,email,password}
    }).then((response) => {
        console.log(response)
        console.log("data is")
        console.log(response.data)
        console.log("response coming from create account api ",response.data.data)
    }, (error) => {
        console.log("error from register/create account api",error)
    })
}
  console.log("naam hai : ",name)
  function yo(){
    alert("name is : "+name+"\nemail is : "+email+"\npassword is : "+password)
  }

  function nameChange(e){
    var x = e.target.value;
    setName(x);
    console.log(x);
  }
  function emailChange(e){
    var x = e.target.value
    setEmail(x);
    console.log(email)
  }
  function passwordChange(e){
    var x = e.target.value
    setPassword(x);
    console.log(password)
  }
  return (
    <div>
        <input placeholder="UserName" type="text" onChange={nameChange}></input><br></br>
        <input placeholder="Email" type="text" onChange={emailChange}></input><br></br>
        <input placeholder="Password" type="password" onChange={passwordChange}></input><br></br>
        <input placeholder="Confirm Password" type="password" onChange={passwordChange}></input><br></br><br></br>
        <Button onClick = {yo}>Sign Up</Button>
        <Button onClick = {CreateAccount}>Create Account</Button>
        <Link to='/login'><Button>Sign In</Button></Link>
    </div>
  )
}

export default Signupp
