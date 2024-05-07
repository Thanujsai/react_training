// import {Menu} from "antd"; 
import { Sidebar, Menu,MenuItem, SubMenu , Input} from 'antd';
import { useNavigate } from 'react-router-dom';

function Navbar(){

    var searchText;
    var navigate = useNavigate();
    function search(){
        console.log('user is searching for ',searchText)
        var url = "/search?q="+searchText;
        navigate(url)
        //navigate to above url
    }

    function handleSearchText(e){
        searchText = e.target.value;
        console.log()
    }
    const items = [
        {label:'Home'},
        {label:'About'},
        {label:'Information'},
        {label:
            (<Input placeholder="Search" onChange={handleSearchText}></Input>)
        },
    ]
    return(
        <>
            <Menu style={{backgroundColor:'#33FFEC'}} mode="horizontal"  items={items}/>
        </>
    )
}

export default Navbar;