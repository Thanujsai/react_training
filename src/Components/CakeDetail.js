// import React from 'react';
// // import { cake } from './CakeList';
// import { Image, Card, Space, Button } from 'antd';
// import { Link } from 'react-router-dom/dist';

// function CakeDetail(params) {
//     const currentUrl = window.location.href;
//     console.log('current url is ',currentUrl)
//     const parts = currentUrl.split("/");
//     console.log(parts)
//     console.log(parts[parts.length - 1])
//     console.log("params")
//     console.log(params)
//     console.log("cake")
//     console.log(cake);

//     var requiredCake = parts[parts.length - 1];
//     console.log('required cake',requiredCake)
//     var imgSrc,name,cost;
//     for (let i = 0; i < cake.length; i++) {
//         if (cake[i].name === requiredCake) {
//             imgSrc = cake[i].image;
//             name = cake[i].name;
//             cost = cake[i].cost;
//             break;
//         }
//     }
//     console.log("cake image")
//     console.log(imgSrc)
//   return (
//     <>
//     <div>CakeDetail</div>
//     <br></br><br></br><br></br><br></br>
//     <div style={{ display: 'flex' }}>
//   <div style={{ flex: 1 }}>
//   <Card style={{ width: 550, height:550 }}>
//             <Image preview={true} src={imgSrc} width={450}></Image>
//             {/* <p>{props.cake.name}</p>
//             <p>Cost : {props.cake.cost} Rs.</p> */}
//     </Card>
//   </div>
//   <div style={{ flex: 1 }}>    <p>{name}</p>
//     <p>{cost} Rs.</p>
//     <Link to={{
//             pathname: '/cart',
//             state: { imgSrc, name, cost }
//           }}><Button>Buy Now</Button></Link>
//     </div>
// </div>




//     </>
//   )
// }


import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Image, Spin, Card, Space, Button } from 'antd';

export default function CakeDetail() {
  var params = useParams();
  console.log("Params")
  console.log(params)
  console.log(params.name)
  console.log("url")
  console.log("http://apibyauw.eu-4.evennode.com/api" + "/cake/" + params.name)
  var [cakedetails, setCakedetails] = useState({});
  useEffect(() => {
    axios({
      url: "http://apibyauw.eu-4.evennode.com/api" + "/cake/" + params.name,
      method: "get",
    }).then((response) => {
      console.log("response is")
      console.log(response)
      setCakedetails(response.data.data);
    });
  }, []);

  if(!cakedetails){
    console.log("spinning")
    return <Spin />
}


  console.log('cake details')
  console.log(cakedetails)
  return (
    <div Style="text-align:center;">
        <Image
          preview={true}
          src={cakedetails.image}
          width={300}
          style={{ float: "left", marginRight: "10px" }}
        />
        <p>Name : {cakedetails.name}</p>
        <p>Price : {cakedetails.price}</p>
        <p>Description : {cakedetails.cakeid}</p>
        <Button style={{ float: "center", marginRight: "10px" }}>
          Add to Cart
        </Button>
      </div>
    // <div>
    //   <h1>Cake details component for {params.cakeid} </h1>
    // </div>
  );
}