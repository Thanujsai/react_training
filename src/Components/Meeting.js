import {Button} from 'antd';
import React,{useState}from 'react';

function Meeting(){
    var [users, setUsers] = useState(0);  //users is a property, setUsers is used to update that property, 0 is the initial value, this will not be re-executed
    var count = 0;//this will be called
    function Meet() {
        users=users+1
        setUsers(users + 1);//function, it will call the Meeting function, line 5 is not called
      }
    return(
        <>
        <Button type="primary" onClick={Meet}>Join Meeting</Button><br></br>
        People Joined : <h1>{users}</h1>
        </>
    )
}

export default Meeting;