import {Input} from 'antd'

function SignUp(){
    var name,email,pass;
    function handleName(event){
        console.log("Event",event);
        name=event.target.value;
    }
    function handleEmail(event){
        email=event.target.value;
    }
    function handlePassword(event){
        pass=event.target.value;
    }
    function handleClick(){
        alert("name : "+name+" email : "+email+" pass : "+"*")
    }
    return(
        <>
            <h1>Create an Account</h1>
            <Input placeholder="name" onChange={handleName} style={{ width: '200px' }}/><br></br>
            <Input placeholder="email" onChange={handleEmail} style={{ width: '200px' }}/><br></br>
            <Input placeholder="password" type="password" onChange={handlePassword} style={{ width: '200px' }}/><br></br>
            <button onClick={handleClick} >Signup</button>
        </>
    )
}

export default SignUp;