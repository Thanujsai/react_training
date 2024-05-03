import React, { useState } from 'react';
import {Admin} from './Admin';
import Edit from './Edit';

function EditPage() {
    const [details, setDetails] = useState(null);

    function editUser(index){
        console.log("edit");
        console.log("index",index)
        console.log("data")
        console.log(users[index])
        setDetails(users[index]);
    }

    return (
        <>
            <Admin data={users} editUser={editUser}/>
            <Edit details={details} />
        </>
    );
}

export default EditPage;
