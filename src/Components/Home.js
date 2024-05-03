import { Table, Button } from "antd";
import Datatable from "./Datatable";
import { useState } from "react";
import Admin from "./Admin"

function Home(){

    var [details, setDetails] = useState([{name:"Thanuj Sai",email:"thanuj.sai14301@gmail.com",password:"psps"}]);  //users is a property, setUsers is used to update that property, 0 is the initial value, this will not be re-executed
    
    function deleteRow(index){
        details.splice(index,2)
        console.log("details ",details)
        console.log("det",[...details])
        setDetails([...details])
    }

    return (
    <div>
        <h1>Home Component</h1>
        {/* <Datatable deleteUser={deleteRow} data={details}/> */}
        <Admin />
        {/* <Datatable dataSource={details}/> */}
    </div>
)
}

export default Home;