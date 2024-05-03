import React from 'react'
import {Input,Button,Alert} from 'antd'
import { useState } from 'react';

function Signupp() {
  var [name,setName] = useState("");
  var [email,setEmail] = useState("");
  var [password,setPassword] = useState("");

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
    </div>
  )
}

export default Signupp
