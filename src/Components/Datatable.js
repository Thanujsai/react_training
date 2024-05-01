import { Table } from "antd";
import Users from "./Users";

function Datatable({data}){//data is array of jsons[{},{}]
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

    return <Table dataSource={users} columns={columns} />
}

export default Datatable;