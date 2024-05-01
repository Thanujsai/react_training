function Users(){
    console.log("in users")
    var users = [
        {name:"sai",role:"dev"},
        {name:"ravi",role:"dev",location:"madhapur"}
    ]

    return(
        <>
        <h1>all users list</h1>
        {
            users.map((user) =>{//map must have a return
                var values = Object.values(user)//keys are array
                return(values.map(x => {
                    return(<h1>{x}</h1>)
                })
                )})   
                //return(<h1>{user.name}</h1>)
                // users.map((user) => {
                //     var keys = Object.keys(user)
                //     return(keys.map((x) => {
                //         console.log("user : ",user[x])
                //         return <h1>{user[x]}</h1>
                //     }))
                // }
                // )
        }

        </>
    )
}

export default Users;