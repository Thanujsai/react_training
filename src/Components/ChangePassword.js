import React from 'react'
import {Input,Button} from 'antd'

function ChangePassword() {
  return (
    <div>
        <input placeholder="OTP" type="text"></input><br></br>
        <input placeholder="Password" type="text"></input><br></br>
        <input placeholder="Confirm Password" type="text"></input><br></br><br></br>
        <Button>Continue</Button>
    </div>
  )
}

export default ChangePassword;

