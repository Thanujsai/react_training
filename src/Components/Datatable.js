import { Table, Button } from "antd";
import { useState } from "react";
import Users from "./Users";
import { Link} from "react-router-dom";

function Datatable({data,deleteUser,editUser}){//data is array of jsons[{},{}]
    // console.log("data")
    // console.log(data)
    // var keys = Object.keys(data[0])

    // console.log("..............",keys)

    // var columns = keys.map((each) => {//each => key,name,age,address, columns => KEY,NAME,AGE,ADDRESS
    //     return {
    //         title:each.toUpperCase(),
    //         dataIndex:each,
    //         key:each
    //     }
    // })
      
    // return <Table dataSource={data} columns={columns} />;

    // return <h1>hi</h1>

    var users = data
    var totalkeys = []//[a,b,c]
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(true)
    }
    data.forEach((each) => {
        var keys = Object.keys(each)//[a,b,c] => a,b,c
        totalkeys.push(...keys)
    })
    console.log("total keys", totalkeys)
    var uniqueKeys = new Set(totalkeys)
    var columns = []
    uniqueKeys.forEach((each) => {
        columns.push({
            title:each.toUpperCase(),
            dataIndex:each,
            key:each
        })
    })
    columns.push({
        title:"Action",
        render:(text,record,index) => {
            return (
            <>
            <h1>is open {isOpen}</h1>
            <Button onClick={() => {deleteUser(index)}}>Delete</Button>
            <Link to="/edit"><Button onClick={() => {editUser(index)}}>Edit</Button></Link>
            <div>
            {/* <Button onClick={() => {handleClick()}} >Edit</Button> */}
            {/* {isOpen && Form()} */}
            </div>
            </>
            )
        }
    })

    const Form = () =>{
        return (
            <>
            <Form>
              <input type="text" placeholder="hello"/>
              <input type="submit" />
            </Form>
            </>
          );
    }

    const EditUser = (index) => {
        console.log("index : ",index)
        console.log("data : ",data)
        var nameToBeChanged = data[index].name;
        var passwordToBeChanged = data[index].password;
        var emailToBeChanged = data[index].email;
        console.log(nameToBeChanged)
        console.log(emailToBeChanged)
        console.log(passwordToBeChanged)

        const [isOpen, setIsOpen] = useState(false);

        const handleClick = (index) => {
            setIsOpen(true)
        }

        const Form = () =>{
            return (
                <>
                <Form>
                  <input type="text" placeholder={nameToBeChanged}/>
                  <input type="submit" />
                </Form>
                </>
              );
        }

        // return(
        //     <>
        //         {console.log("inside return statement")}
        //         <h1>hit</h1>
        //         return{<Form></Form>}
        //         {console.log("after return statement")}
        //     </>
        // )
        
    }

    // const Form = () =>{
    //     return (
    //         <form>
    //           <input type="text" value="abc"/>
    //           <input type="text" placeholder="email"/>
    //           <input type="text" placeholder="password"/>
    //           <input type="submit" />
    //         </form>
    //       );
    // }

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      };

    return <Table dataSource={users} columns={columns} onChange={onChange}/>
}

export default Datatable;