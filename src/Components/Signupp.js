import React from 'react'
import {Input,Button} from 'antd'

function Signupp() {
  return (
    <div>
        <input placeholder="UserName" type="text"></input><br></br>
        <input placeholder="Email" type="text"></input><br></br>
        <input placeholder="Password" type="text"></input><br></br>
        <input placeholder="Confirm Password" type="text"></input><br></br><br></br>
        <Button>Sign Up</Button>
    </div>
  )
}

export default Signupp
