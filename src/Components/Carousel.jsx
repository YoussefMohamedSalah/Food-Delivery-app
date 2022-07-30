import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import Kfc from '../Images/kfc.png';
import Mac from '../Images/mac.png';
import Unilever from '../Images/unilever.png';
import Dannon from '../Images/dannon.png';
import Chopchop from '../Images/chopchop.png';
import Pizzahut from '../Images/pizzahut.png';
import Burggerking from '../Images/burggerking.png';
import Foodnetwork from '../Images/foodnetwork.png';
import Nestle from '../Images/nestle.png';
import Tetrapack from '../Images/tetrapack.png';
import Royalcanin from '../Images/royalcanin.png';

function Carousel() {
  //   var settings = {
  //     dots: true,
  //     infinite: false,
  //     speed: 500,
  //     slidesToShow: 4,
  //     slidesToScroll: 4,
  //     initialSlide: 0,
  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 3,
  //           infinite: true,
  //           dots: true,
  //         },
  //       },
  //       {
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2,
  //           initialSlide: 2,
  //         },
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //         },
  //       },
  //     ],
  //   };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 100,
    autoplay: true,
    speed: 20000,
    autoplaySpeed: 0,
    cssEase: 'linear',
  };

  return (
    <DivCarousel>
      <h2>Our Top Partners</h2>
      <Slider {...settings}>
        <div>
          <img src={Kfc} alt="sponser-icon" />
        </div>
        <div>
          <img src={Mac} alt="sponser-icon" />
        </div>
        <div>
          <img src={Unilever} alt="sponser-icon" />
        </div>
        <div>
          <img src={Dannon} alt="sponser-icon" />
        </div>
        <div>
          <img src={Chopchop} alt="sponser-icon" />
        </div>
        <div>
          <img src={Pizzahut} alt="sponser-icon" />
        </div>
        <div>
          <img src={Burggerking} alt="sponser-icon" />
        </div>
        <div>
          <img src={Foodnetwork} alt="sponser-icon" />
        </div>
        <div>
          <img src={Nestle} alt="sponser-icon" />
        </div>
        <div>
          <img src={Tetrapack} alt="sponser-icon" />
        </div>
        <div>
          <img src={Royalcanin} alt="sponser-icon" />
        </div>
        {/*  <div>
          <img src={IImage} alt="sponser-icon" />
        </div> */}
      </Slider>
    </DivCarousel>
  );
}

const DivCarousel = styled.div`
  margin-top: 7rem;
  height: 7rem;
  h2 {
    padding-bottom: 0.5rem;
  }
  img {
    width: 3.5rem;
  }
`;

export default Carousel;
