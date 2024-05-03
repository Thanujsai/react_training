import React from 'react'
import Admin from './Admin'
import users from './Users';

function Edit() {
    console.log("in edit")

    var details;

    function editUser(index){
        console.log("edit");
        console.log("index",index)
        console.log("data")
        console.log(users[index])
        details = users[index]
    }
  return (
    <h1>jfkak</h1>
  )
}

export default Edit
