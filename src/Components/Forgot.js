import React from 'react'
import {Input,Button,Text} from 'antd'
import { useState } from 'react';

function Forgot() {
  var [email,setEmail] = useState("");
  var [otp,setOtp] = useState(false);
  function emailChange(e){
    var a = e.target.value;
    setEmail(a)
    console.log(email)
  }

  function click(){
    console.log("in click")
    setOtp(true)
    // return(
    //   <div>
    //     <p>Kindly Check your mail and enter the OTP here</p>
    //     <input placeholder="Email" type="text" onChange={email}></input><br></br>
    //   </div>
    // )
  }
  return (
    <div>
        <input placeholder="Email" type="text" onChange={emailChange}></input><br></br>
        <Button onClick={click}>Send OTP</Button><br></br>
        {otp && <p>OTP has been sent to the email {email}</p>}
        {/* {if(sendOtp == 1)} */}
    </div>
  )
}

export default Forgot
