import {Alert} from 'antd';

function UsersList(){
    var users =["thanuj","amulya","ravi"]
    if(users.length == 0){
        return(
            <Alert message="No results found" type="warning" />
        )
    }
    else{
        return(
            <>
            <h1>All users</h1>
            {
                users.map((user) => {return(<h1>{user}</h1>)})
            }

            </>
        )
    }
}

export default UsersList;