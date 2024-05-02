import {Input,Button} from 'antd';
import React,{useState} from 'react';
import Datatable from './Datatable';

function Attendance(){
    console.log("Attendance")
    var user = {};
    var [details, setDetails] = useState([{name:"Thanuj Sai",email:"thanuj.sai14301@gmail.com",password:"psps"}]);  //users is a property, setUsers is used to update that property, 0 is the initial value, this will not be re-executed

    function handleName(event) {
        user.name = event.target.value;
      }

    function handleEmail(event) {
        user.email = event.target.value;
    }
    function handlePassword(event) {
        user.password = event.target.value;
    }

    function deleteRow(index){
        details.splice(index,2)
        console.log("details ",details)
        console.log("det",[...details])
        setDetails([...details])
    }
    function displayNames(){
        console.log("details")
        console.log(details)
        details.push(user)
        details = [...details]//dom is updated only when a change happens
        console.log("details")
        console.log(details)
        //update the state
        setDetails(details)
    }
    return(
        <>
        <Input placeholder="name" onChange={handleName} style={{ width: '200px' }}/><br></br>
        <Input placeholder="email" onChange={handleEmail} style={{ width: '200px' }}/><br></br>
        <Input placeholder="password" type="password" onChange={handlePassword} style={{ width: '200px' }}/><br></br>
        <Button type="primary" onClick={displayNames}>Add</Button><br></br>
        <Datatable deleteUser={deleteRow} data={details}/>
        {/* {
            name.map((each) => {
                <h1>{each}</h1>
            })
        } */}
        {/* <p>{name}</p> */}
        {/* <h1>{name}</h1> */}
        {/* Student Names : <h1>{user}</h1> */}
        </>
    )
}

export default Attendance;