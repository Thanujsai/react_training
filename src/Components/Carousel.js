import React from 'react';
import { Carousel } from 'antd';
import './Carousel.css';

const contentStyle = {
  height: '300px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

function Slide(){
  return(
    <div className="slider-container">
        <Carousel className="carousel-style" autoplay>
          <div>
           <img src='https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg' style={contentStyle} className='photos' />
          </div>
          <div>
            <img src='https://m.media-amazon.com/images/I/418zBNWoVnS._AC_UF1000,1000_QL80_.jpg' style={contentStyle} className='photos' />
          </div>
          <div>
            <img src='https://www.doughandcream.com/wp-content/uploads/2023/04/2-1.jpeg' style={contentStyle} className='photos' />
          </div>
          <div>
            <img src='https://st4.depositphotos.com/10614052/25239/i/450/depositphotos_252391082-stock-photo-sweet-chocolate-cake-on-wooden.jpg' style={contentStyle} className='photos' />
          </div>
        </Carousel>
    </div>
  )
}

export default Slide;