import {Button, Menu} from 'antd';
import { Link } from 'react-router-dom';

{/* <Link to="/forgot"><Button>Forgot</Button></Link> */}
function Navigation(){
    const items = [
        {label : <Link to="/"><Button type="text">Home</Button></Link>},
        {label : <Link to="/login"><Button type="text">Login</Button></Link>},
        {label : <Link to="/signup"><Button type="text">Signup</Button></Link>},
        {label : <Link to="/forgot"><Button type="text">Forgot</Button></Link>},
        {label : <Link to="/navigate"><Button type="text">Try Navigate</Button></Link>},
        {label : <Link to="/bakery"><Button type="text">Bakery</Button></Link>},
        {label : <Link to="/cart"><Button type="text">Cart</Button></Link>},
    ]
    return(
        <>
            <Menu style={{backgroundColor:'#33FFEC'}} mode="horizontal"  items={items}/>
        </>
    )
}

export default Navigation;