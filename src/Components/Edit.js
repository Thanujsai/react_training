import React from 'react'
import {Admin} from './Admin'
import users from './Users';
import { details } from './Admin';
import {Text,Button} from 'antd';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Edit() {
  console.log("in edit method")
  console.log(details)
  var navigate = useNavigate();
  // var [details, setDetails] = useState([{name:"Thanuj Sai",email:"thanuj.sai14301@gmail.com",password:"psps"}]);  //users is a property, setUsers is used to update that property, 0 is the initial value, this will not be re-executed

  function changeFirstName(e){
    console.log(e.target.value)
    details.firstname = e.target.value
    console.log("changed")
  }
  function changeLastName(e){
    console.log(e.target.value)
    details.lastname = e.target.value
    console.log("changed")
  }
  function changeEmail(e){
    console.log(e.target.value)
    details.email = e.target.value
    console.log("changed")
  }
  function changeExperience(e){
    console.log(e.target.value)
    details.exp = e.target.value
    console.log("changed")
  }
  function changeGender(e){
    console.log(e.target.value)
    details.gender = e.target.value
    console.log("changed")
  }
  function changeAge(e){
    console.log(e.target.value)
    details.age = e.target.value
    console.log("changed")
  }
  function changePhone(e){
    console.log(e.target.value)
    details.phone = e.target.value
    console.log("changed")
  }
  function click(){
    console.log("click")
    
    navigate("/")
  }
  return (
    <>
      <h1>jfkak</h1>
      FirstName : <input type="text" defaultValue={details.firstname} onChange={changeFirstName}/><br></br>
      LastName : <input type="text" defaultValue={details.lastname} onChange={changeLastName}/><br></br>
      Email : <input type="text" defaultValue={details.email} onChange={changeEmail}/><br></br>
      Experience : <input type="text" defaultValue={details.exp} onChange={changeExperience}/><br></br>
      Gender : <input type="text" defaultValue={details.gender} onChange={changeGender}/><br></br>
      Age : <input type="text" defaultValue={details.age} onChange={changeAge}/><br></br>
      Phone : <input type="text" defaultValue={details.phone} onChange={changePhone}/><br></br><br></br>
      {/* <Link to="/"> */}
        <Button onClick={click}>Confirm</Button>
      {/* </Link> */}
    </>
  )
}

export default Edit
//difference between Link and useNavigate hook??