import {Button, Menu, Input} from 'antd';
import { Link } from 'react-router-dom';
import { Navigate,useNavigate } from 'react-router-dom';

{/* <Link to="/forgot"><Button>Forgot</Button></Link> */}

function Navigation(){

    var searchText;
    var navigate = useNavigate();
    function Search(){
        console.log('user is searching for ',searchText)
        var url = "/search?q="+searchText;
        navigate(url)
        //navigate to above url
    }

    function handleSearchText(e){
        searchText = e.target.value;
        console.log(searchText)
    }

    const items = [
        {label : <Link to="/"><Button type="text">Home</Button></Link>},
        {label : <Link to="/login"><Button type="text">Login</Button></Link>},
        {label : <Link to="/signup"><Button type="text">Signup</Button></Link>},
        {label : <Link to="/forgot"><Button type="text">Forgot</Button></Link>},
        {label : <Link to="/navigate"><Button type="text">Try Navigate</Button></Link>},
        {label : <Link to="/bakery"><Button type="text">Bakery</Button></Link>},
        {label : <Link to="/cart"><Button type="text">Cart</Button></Link>},
        // {label : <Link to="/search/:name"><Input placeholder="Basic usage" /></Link>},
        {label:
            (<>
            <Input placeholder="Search" onChange={handleSearchText}></Input>
            <Button onClick={Search}>Search</Button>
            </>)
        },
    ]
    return(
        <>
            <Menu style={{backgroundColor:'#33FFEC'}} mode="horizontal"  items={items}/>
        </>
    )
}

export default Navigation;