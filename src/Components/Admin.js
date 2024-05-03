import Datatable from "./Datatable";
import { users } from "./data";

export default function Admin(){//THIS Component is to display data at home page

    var details;

    function editUser(index){
        console.log("edit");
        console.log("index",index)
        console.log("data")
        console.log(users[index])
        details = users[index]
    }
    return (
        <>
        <Datatable data={users} editUser={editUser}/>
        {/* <Datatable data={users}/> */}
        </>
    )
}