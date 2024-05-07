import Cake from './Cake'
import { Link } from 'react-router-dom/dist';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button } from 'antd';

var cake;
function CakeList(){

    var[cakes,setCakes] = useState();
    useEffect(() => {
        getCakeList()
    },[])//when we update the state the component is again rendered but that fn will not be called at that time because of empty braces
    function getCakeList(){
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/allcakes",
            method:"get"
        }).then((response) => {
            setCakes(response.data.data)
            console.log("response coming from all cakes api ",response.data.data)
        }, (error) => {
            console.log("error from all cakes api",error)
        })
    }
    cake = [{name:"hi", cost:"1000", image:"https://m.media-amazon.com/images/I/418zBNWoVnS._AC_UF1000,1000_QL80_.jpg", tag:"Bestseller"},
    {name:"chocolate-cake", cost:"1000", image:"https://st4.depositphotos.com/10614052/25239/i/450/depositphotos_252391082-stock-photo-sweet-chocolate-cake-on-wooden.jpg", tag:"Must try"},
    {name:"butterscotch-cake", cost:"1000", image:"https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg"},
    {name:"chillar-cake", cost:"1000", image:"https://www.doughandcream.com/wp-content/uploads/2023/04/2-1.jpeg"},
    {name:"Red-Velvet-Cake", cost:"1000", image:"https://m.media-amazon.com/images/I/418zBNWoVnS._AC_UF1000,1000_QL80_.jpg"},
    {name:"Chocolate-Fudge-Cake", cost:"1000", image:"https://st4.depositphotos.com/10614052/25239/i/450/depositphotos_252391082-stock-photo-sweet-chocolate-cake-on-wooden.jpg"},
    {name:"Lemon-Drizzle-Cake", cost:"1000", image:"https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg"},
    {name:"Carrot-Cake", cost:"1000", image:"https://www.doughandcream.com/wp-content/uploads/2023/04/2-1.jpeg"},
    {name:"Black-Forest-Cake", cost:"1000", image:"https://m.media-amazon.com/images/I/418zBNWoVnS._AC_UF1000,1000_QL80_.jpg"},
    {name:"Tiramisu-Cake", cost:"1000", image:"https://st4.depositphotos.com/10614052/25239/i/450/depositphotos_252391082-stock-photo-sweet-chocolate-cake-on-wooden.jpg"},
    {name:"Strawberry-Short-cake", cost:"1000", image:"https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg"},
    {name:"Vanilla-Sponge-Cake", cost:"1000", image:"https://www.doughandcream.com/wp-content/uploads/2023/04/2-1.jpeg"},
    {name:"Coffee-Cake", cost:"1000", image:"https://m.media-amazon.com/images/I/418zBNWoVnS._AC_UF1000,1000_QL80_.jpg"},
    {name:"Pineapple-Upside-Down-Cake", cost:"1000", image:"https://st4.depositphotos.com/10614052/25239/i/450/depositphotos_252391082-stock-photo-sweet-chocolate-cake-on-wooden.jpg"},
    {name:"Coconut-Cream-Cake", cost:"1000", image:"https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg"},
    {name:"Rainbow-Cake", cost:"1000", image:"https://www.doughandcream.com/wp-content/uploads/2023/04/2-1.jpeg"},
  ] 
  return(
    <>
    <row>
        {/* <Cake name="choco truffle" cost="1200" image="truffle.webp"/> */}
        {/* for (let index = 0; index < cake.length; index++) {
            const element = array[index];
            
        } */}
        {/* for(let i=0;i<cake.length;i++){

        } */}
        {/* <Cake cake={cake[0]}/>
        <Cake cake={cake[1]}/>
        <Cake cake={cake[2]}/>
        <Cake cake={cake[3]}/> */}
        
        <div>
            {cake.map((cakeItem) => (
                <Link to={`/cakeDetail/${cakeItem.name}`} key={cakeItem.name}><Cake cake={cakeItem} /></Link>
            ))}
            <Button onClick={getCakeList} type="primary">Get Cake List</Button>
        </div>
        </row>
  </>
  )
}

export {cake, CakeList};