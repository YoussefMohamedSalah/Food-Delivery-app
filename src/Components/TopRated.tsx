import React from 'react';
import styled from 'styled-components';
import { IoIosArrowDropright } from 'react-icons/io';
import { AiOutlineStar } from 'react-icons/ai';
// import Slider from 'react-slick';
import FoodImage1 from '../Images/pic1.jpg';
import FoodImage2 from '../Images/pic2.jpg';
import FoodImage3 from '../Images/pic3.jpg';
import FoodImage4 from '../Images/pic4.jpg';

function TopRated() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 3,
  // };

  return (
    <DivTopRated>
      <div id="filter">
        <p>Top Rated Menus</p>
        <IoIosArrowDropright />
      </div>
      <div className="cards-wrapper">
        <SingleCard className="single-card">
          <div className="upper-section-card">
            <div className="card-image">
              <img src={FoodImage1} alt="food" />
            </div>
            <div className="card-rate">
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
          </div>
          <div className="lower-section-card">
            <p>Basil Leaves and Avocado on Slice..</p>
            <ul>
              <li>
                $5.8
                <del>$9.9</del>
              </li>
            </ul>
          </div>
        </SingleCard>
        <SingleCard className="single-card">
          <div className="upper-section-card">
            <div className="card-image">
              <img src={FoodImage2} alt="food" />
            </div>
            <div className="card-rate">
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
          </div>
          <div className="lower-section-card">
            <p>Chicken Egg Indonesia</p>
            <ul>
              <li>
                $5.8
                <del>$9.9</del>
              </li>
            </ul>
          </div>
        </SingleCard>
        <SingleCard className="single-card">
          <div className="upper-section-card">
            <div className="card-image">
              <img src={FoodImage3} alt="food" />
            </div>
            <div className="card-rate">
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
          </div>
          <div className="lower-section-card">
            <p>Avocado Salad With Yoghurt</p>
            <ul>
              <li>
                $5.8
                <del>$9.9</del>
              </li>
            </ul>
          </div>
        </SingleCard>
        <SingleCard className="single-card">
          <div className="upper-section-card">
            <div className="card-image">
              <img src={FoodImage4} alt="food" />
            </div>
            <div className="card-rate">
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
          </div>
          <div className="lower-section-card">
            <p>Fresh Green Fruits Juice Combo</p>
            <ul>
              <li>
                $5.8
                <del>$9.9</del>
              </li>
            </ul>
          </div>
        </SingleCard>
        <SingleCard className="single-card">
          <div className="upper-section-card">
            <div className="card-image">
              <img src={FoodImage4} alt="food" />
            </div>
            <div className="card-rate">
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
          </div>
          <div className="lower-section-card">
            <p>Fresh Green Fruits Juice Combo</p>
            <ul>
              <li>
                $5.8
                <del>$9.9</del>
              </li>
            </ul>
          </div>
        </SingleCard>
      </div>
    </DivTopRated>
  );
}

const DivTopRated = styled.div`
  display: flex;
  width: 100%;
  height: 29rem;
  flex-direction: column;
  /* justify-content: space-between; */
  #filter {
    display: flex;
    justify-content: space-between;
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: #3cbb72;
  }
  p {
    color: black;
    font-size: 153%;
    font-weight: 500;
  }
  .cards-wrapper {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 0.5rem;
    padding-bottom: 1.5rem;
    background-color: #ffffff;
  }
`;
const SingleCard = styled.div`
  .upper-section-card {
    display: flex;
    flex-direction: column;
  }
  .lower-section-card {
    /* width: -webkit-fill-available; */
    height: 3rem;
    width: 16rem;
    color: #222222;
    p {
      color: black;
      font-size: 125%;
      font-weight: 600;
    }
    ul li {
      color: #3cbb72;
      font-weight: 700;
      font-size: 18px;
      list-style: none;
      margin-top: 0.7rem;
    }
    ul li del {
      font-size: 16px;
      font-weight: 500;
      color: #929292;
      margin-left: 12px;
    }
  }
  .upper-section-card img {
    width: 16rem;
    height: 18rem;
    border-radius: 1rem;
    flex-direction: column;
    display: flex;
    justify-content: center;
  }
  .card-rate {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 2rem;
    background-color: #ff7f23;
    border-radius: 1rem;
    align-self: center;
    position: relative;
    top: -1rem;
    svg {
      color: #fff;
    }
  }
`;

export default TopRated;
