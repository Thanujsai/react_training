import { Table, Button } from "antd";
import Users from "./Users";

function Datatable({data,deleteUser}){//data is array of jsons[{},{}]
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
            return <Button onClick={() => {deleteUser(index)}} >Delete</Button>
        }
    })

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      };

    return <Table dataSource={users} columns={columns} onChange={onChange}/>
}

export default Datatable;