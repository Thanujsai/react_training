import React, { useState } from 'react'
import {Input,Button,Alert} from 'antd'
import { Link, useNavigate } from 'react-router-dom';

const { TextArea } = Input;

function Loginn() {
    var [userName,setUserName] = useState("");
    var [passWord,setPassword] = useState("");
    var navigate = useNavigate();//to navigate to other pages
    var [error,setError] = useState("")

    function changeUsername(e){
        console.log("event")
        var a = e.target.value;
        console.log(a)
        setUserName(a)
    }

    function changePassword(e){
        console.log("event")
        var a = e.target.value;
        console.log(a)
        setPassword(a)
    }

    function click(){
        console.log("username is",userName)
        console.log(userName)
        if(userName == 'thanuj' && passWord == 'thanuj'){
            console.log("in success")
            navigate("/success")
        }
        else{
            console.log("in error")
            setError("******dobbey******")
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
        
        {error == '******dobbey******' && <Alert type="error" message={error}/>}
        <input placeholder="UserName" type="text" onChange={changeUsername}></input><br></br>
        <input placeholder="Password" type="password" onChange={changePassword}></input><br></br><br></br>
        <Button onClick={click}>Login</Button>
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
