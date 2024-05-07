import React from 'react'
import { useParams } from 'react-router-dom';

function Cart(params) {
  var {name} = useParams();

  console.log("pparams in cart")
  console.log(name)
  return (
    <div>Cart</div>

  )
}

export default Cart