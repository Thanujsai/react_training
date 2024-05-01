import {Input} from 'antd'

function SignUp(){
    var name,email,pass;
    function handleName(event){
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
            <Input placeholder="name" onChange={handleName} />
            <Input placeholder="email" onChange={handleEmail}/>
            <Input placeholder="password" type="password" onChange={handlePassword}/>
            <button onClick={handleClick} >Signin</button>
        </>
    )
}

export default SignUp;