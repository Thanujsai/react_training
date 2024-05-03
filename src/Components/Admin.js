import Datatable from "./Datatable";
import { users } from "./data";

var details;
function Admin(){//THIS Component is to display data at home page

    function editUser(index){
        console.log("in admin")
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

export { Admin,details};