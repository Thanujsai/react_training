import React from 'react';
import { cake } from './CakeList';
import { Image, Card, Space, Button } from 'antd';
import { Link } from 'react-router-dom/dist';

function CakeDetail(params) {
    const currentUrl = window.location.href;
    console.log('current url is ',currentUrl)
    const parts = currentUrl.split("/");
    console.log(parts)
    console.log(parts[parts.length - 1])
    console.log("params")
    console.log(params)
    console.log("cake")
    console.log(cake);

    var requiredCake = parts[parts.length - 1];
    console.log('required cake')
    var imgSrc,name,cost;
    for (let i = 0; i < cake.length; i++) {
        if (cake[i].name === requiredCake) {
            imgSrc = cake[i].image;
            name = cake[i].name;
            cost = cake[i].cost;
            break;
        }
    }
    console.log("cake image")
    console.log(imgSrc)
  return (
    <>
    <div>CakeDetail</div>
    <br></br><br></br><br></br><br></br>
    <div style={{ display: 'flex' }}>
  <div style={{ flex: 1 }}>
  <Card style={{ width: 550, height:550 }}>
            <Image preview={true} src={imgSrc} width={450}></Image>
            {/* <p>{props.cake.name}</p>
            <p>Cost : {props.cake.cost} Rs.</p> */}
    </Card>
  </div>
  <div style={{ flex: 1 }}>    <p>{name}</p>
    <p>{cost} Rs.</p>
    <Link to={{
            pathname: '/cart',
            state: { imgSrc, name, cost }
          }}><Button>Buy Now</Button></Link>
    </div>
</div>




    </>
  )
}

export default CakeDetail;