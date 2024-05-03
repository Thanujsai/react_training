import {Button, Menu} from 'antd';
import { Link } from 'react-router-dom';

{/* <Link to="/forgot"><Button>Forgot</Button></Link> */}
function Navigation(){
    const items = [
        {label : <Link to="/"><Button>Home</Button></Link>},
        {label : <Link to="/login"><Button>Login</Button></Link>},
        {label : <Link to="/signup"><Button>Signup</Button></Link>},
        {label : <Link to="/forgot"><Button>Forgot</Button></Link>},
    ]
    return(
        <>
            <Menu style={{backgroundColor:'#33FFEC'}} mode="horizontal"  items={items}/>
        </>
    )
}

export default Navigation;