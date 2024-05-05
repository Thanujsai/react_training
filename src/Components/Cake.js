import {Card, Badge,Image, Space} from "antd";

// function Cake(props){
//     console.log(props)
//     var data = {
//         name:props.cake.name,
//         price:props.cake.cost,
//         image:props.cake.image
//     }
//     return(
//         <Space direction="horizontal" size={16} style={{paddingTop:"50px"}}>
//         <Card  style={{
//             width: 250,
//             height:250,
//             margin:20
//           }}>
//             <Image preview={true} src={data.image} width={150}></Image>
//             <p>{data.name}</p>
//             <p>{data.price}</p>
//         </Card>
//         </Space>
//     )
// }

function Cake(props){
    var tag;
    console.log("props")
    console.log(props)
    console.log(props.cake.tag)//Bestseller
    if(props.cake.tag){
        tag=<p>{props.cake.tag}</p>;
                return(
                    <Space direction="horizontal" size={16} style={{paddingTop:"50px"}}>
                 <Badge.Ribbon size="small" color="green" text={props.cake.tag} >
        <Card style={{ width: 250, height:250, marginLeft: 20 }}>
            <Image preview={false} src={props.cake.image} width={150}></Image>
            <p>{props.cake.name}</p>
            <p>Cost : {props.cake.cost} Rs.</p>
        </Card>
        </Badge.Ribbon>
        </Space>
     
    )
    }
    else{
        tag=null
        return(
            <Space direction="horizontal" size={16} style={{paddingTop:"50px"}}>
    <Card  style={{
        width: 250,
        height:250,
        margin:20
      }}>
        <Image preview={false} src={props.cake.image} width={150}></Image>
        <p>{props.cake.name}</p>
        <p>Cost : {props.cake.cost} Rs.</p>
        {props.cake.tag && <p>{props.cake.tag}</p>}
    </Card>
    </Space>
)
    }
    console.log("tag is",tag.props.children)

}

export default Cake;