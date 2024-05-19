// import React from 'react';
// // import { cake } from './CakeList';
// import { Image, Card, Space, Button } from 'antd';
import { Link } from 'react-router-dom/dist';
import { useNavigate } from 'react-router-dom/dist';




import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Image, Spin, Card, Space, Button } from 'antd';

export default function CakeDetail() {
  var params = useParams();
  var navigate = useNavigate();
  console.log("Params")
  console.log(params)
  console.log(params.name)
  console.log("url")
  console.log("http://apibyauw.eu-4.evennode.com/api" + "/cake/" + params.name)
  var [cakedetails, setCakedetails] = useState();
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

var data={};
function addToCart(){
  axios({
  url: "http://apibyauw.eu-4.evennode.com/api/addcaketocart",
  method: "post",
  data: {
    cakeid: cakedetails.cakeid,
    name: cakedetails.name,
    price: cakedetails.price,
    image: cakedetails.image,
    weight: cakedetails.weight
  },
  headers: {
    Authorization: localStorage.token
  }
}).then((response) => {
    setCakedetails(response.data.data);
    alert('Added to cart');
    console.log("data in response")
    console.log(cakedetails)
    localStorage.setItem("cakeid",cakedetails.cakeid)
    console.log("local storage");
    console.log(localStorage.getItem(cakedetails.cakeid))
    navigate('/cart');
}, (error) => {
  console.log('Error from API', error);
})
}
  console.log('cake details')
  console.log(cakedetails)
  return (
    <div Style="text-align:center; margin:20px">
        <Image
          preview={true}
          src={cakedetails.image}
          width={300}
          margin={20}
          style={{ float: "left"}}
        />
        <p>Name : {cakedetails.name}</p>
        <p>Price : {cakedetails.price}</p>
        <p>Description : {cakedetails.description}</p>
        {/* <Link to={"/cart/"+cakedetails.cakeid}> */}
          <Button style={{ float: "center", marginRight: "10px" }} onClick={addToCart}>
          Add to Cart
        </Button>
        {/* </Link> */}
        {/* <Link to={"/cakeDetail/"+data.cakeid}></Link> */}
      </div>
    // <div>
    //   <h1>Cake details component for {params.cakeid} </h1>
    // </div>
  );
}