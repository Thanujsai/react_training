import { Button, Flex } from 'antd';

function Login(){
    return(
        <div>
            <h1>Login</h1>
            <div>
                <input placeholder="Email" type="text"></input><br></br>
                <input placeholder="Password" type="text"></input><br></br>
                <Button type="primary" danger ghost>Click Me</Button>
            </div>
            
        </div>
    )
}

export default Login;