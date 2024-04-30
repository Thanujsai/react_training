import Cake from './Cake'

function CakeList(){
    var cake = [{name:"hi", cost:"1000", image:"https://m.media-amazon.com/images/I/418zBNWoVnS._AC_UF1000,1000_QL80_.jpg", tag:"Bestseller"},
    {name:"chocolate cake", cost:"1000", image:"https://st4.depositphotos.com/10614052/25239/i/450/depositphotos_252391082-stock-photo-sweet-chocolate-cake-on-wooden.jpg"},
    {name:"butterscoth cake", cost:"1000", image:"https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg"},
    {name:"chillar cake", cost:"1000", image:"https://www.doughandcream.com/wp-content/uploads/2023/04/2-1.jpeg"},
    {name:"hi", cost:"1000", image:"https://m.media-amazon.com/images/I/418zBNWoVnS._AC_UF1000,1000_QL80_.jpg"},
    {name:"chocolate cake", cost:"1000", image:"https://st4.depositphotos.com/10614052/25239/i/450/depositphotos_252391082-stock-photo-sweet-chocolate-cake-on-wooden.jpg"},
    {name:"butterscoth cake", cost:"1000", image:"https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg"},
    {name:"chillar cake", cost:"1000", image:"https://www.doughandcream.com/wp-content/uploads/2023/04/2-1.jpeg"},
    {name:"hi", cost:"1000", image:"https://m.media-amazon.com/images/I/418zBNWoVnS._AC_UF1000,1000_QL80_.jpg"},
    {name:"chocolate cake", cost:"1000", image:"https://st4.depositphotos.com/10614052/25239/i/450/depositphotos_252391082-stock-photo-sweet-chocolate-cake-on-wooden.jpg"},
    {name:"butterscoth cake", cost:"1000", image:"https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg"},
    {name:"chillar cake", cost:"1000", image:"https://www.doughandcream.com/wp-content/uploads/2023/04/2-1.jpeg"},
    {name:"hi", cost:"1000", image:"https://m.media-amazon.com/images/I/418zBNWoVnS._AC_UF1000,1000_QL80_.jpg"},
    {name:"chocolate cake", cost:"1000", image:"https://st4.depositphotos.com/10614052/25239/i/450/depositphotos_252391082-stock-photo-sweet-chocolate-cake-on-wooden.jpg"},
    {name:"butterscoth cake", cost:"1000", image:"https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg"},
    {name:"chillar cake", cost:"1000", image:"https://www.doughandcream.com/wp-content/uploads/2023/04/2-1.jpeg"},
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
                <Cake cake={cakeItem} />
            ))}
        </div>
        </row>
  </>
  )
}

export default CakeList;