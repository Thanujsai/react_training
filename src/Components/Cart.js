import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table } from 'antd';

var cakeIds = [];
function Cart(params) {
  // var {name} = useParams();

  // // <Link to={"/cakeDetail/"+data.cakeid}><Image
  // console.log("in cart component")
  // console.log(name)
  // function addToCart() {
  // console.log("pparams in cart")
  // console.log(name)

  const columns = [
    {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        render: (image) => <img src={image} alt="Cake" style={{ height: 100, width: 'auto' }} />,
    },
    {
        title: 'Id',
        dataIndex: 'cakeid',
        key: 'cakeid',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Button type="primary" onClick={() => removeItemFromCart(record.cakeid)}>Remove</Button>
        ),
    },
];
  console.log("localStorage")
  console.log(localStorage.cakeId)

  var cakeId = localStorage.cakeId;
  var [id,setId] = useState([]);
  var [cakecart, setCakecart] = useState([]);
  useEffect(() => {
    axios({
      url: "http://apibyauw.eu-4.evennode.com/api" + "/cakecart/",
      method: "get",
      headers: {
        Authorization: localStorage.token
    }
    }).then((response) => {
      // console.log("response in cart is")
      // console.log(response)
      // setCakecart(response.data.data);
      // localStorage.setItem("cakeid",response.data.data.cakeid)
      // console.log("response.data.data.cakeid")
      // cakeIds.push(response.data.data.cakeid)
      // console.log(new Set(cakeIds))
      // // cartCakeIds.push(response.data.data.cakeid)
      // var idFromApi = response.data.data.cakeid;
      // setId(id,idFromApi)
      // console.log("local storage cart : ")
      // console.log(localStorage)
      // console.log("cart cake ids")
      console.log("in cart")
      console.log(response)
      console.log(response.data.data)
      setCakecart(response.data.data)
      console.log("cakecart is : ")
      console.log(cakecart)
      console.log("token is")
      console.log(localStorage.token)
    });
  }, []);

  
  function removeItemFromCart(cakeid) {
    setCakecart(prevCartItems => prevCartItems.filter(item => item.cakeid !== cakeid));
}

  return (
    <>
    <div>Cart</div>
    <div>
    {/* <p>{localStorage}</p> */}
    {console.log(cakecart)}
    <Table
                dataSource={cakecart}
                columns={columns}
                rowKey="_id"
                pagination={false} // Disable pagination if not needed
            />

    </div>
    </>

  )
}

export default Cart;