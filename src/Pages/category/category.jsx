import React from 'react';
import styled from 'styled-components';
import { IoIosArrowDropright } from 'react-icons/io';
import Fish from '../../Images/fish.svg';
import burger from '../../Images/fast-food-burger-svgrepo-com.svg';
import falafel from '../../Images/falafel.svg';
import fruits from '../../Images/fruits.svg';
import Pets from '../../Images/pet-food-pet-svgrepo-com.svg';
import Chiness from '../../Images/chinese-food-svgrepo-com.svg';
import vegetables from '../../Images/vegetables-salad-svgrepo-com (1).svg';

function Category() {
  return (
    <DivCategory>
      <div id="filter">
        <p>Category</p>
        <IoIosArrowDropright />
      </div>
      <div>
        <ListItems>
          <li>
            <div>
              <img src={burger} alt="burger-icon" />
            </div>
            <p>fastfood</p>
          </li>
          <li>
            <div>
              <img src={Fish} alt="fish-icon" />
            </div>
            <p>seafood</p>
          </li>
          <li>
            <div>
              <img src={Chiness} alt="Chiness-icon" />
            </div>
            <p>Chiness</p>
          </li>
          <li>
            <div>
              <img src={falafel} alt="falafel-icon" />
            </div>
            <p>orianted</p>
          </li>
          <li>
            <div>
              <img src={fruits} alt="fruits-icon" />
            </div>
            <p>Frouits</p>
          </li>
          <li>
            <div>
              <img src={vegetables} alt="vegetables-icon" />
            </div>
            <p>Vegetables</p>
          </li>
          <li>
            <div>
              <img src={Pets} alt="Pets-icon" />
            </div>
            <p>For Pets</p>
          </li>
        </ListItems>
      </div>
    </DivCategory>
  );
}

const DivCategory = styled.div`
  display: flex;
  width: 100%;
  height: 6rem;
  flex-direction: column;
  justify-content: space-between;
  /* margin: 3rem 0rem 3rem 0rem; */
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
`;

const ListItems = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
  align-items: center;
  justify-content: space-around;
  margin: 2rem 0rem 2rem 0rem;
  li div {
    width: 5rem;
    height: 5rem;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 13px;
    border-color: #eeeaea;
    cursor: pointer;
    img {
      width: 4rem;
      height: 4rem;
    }
  }
  p {
    line-height: 2;
    font-weight: 400;
    font-size: 20px;
    cursor: pointer;
  }
`;
export default Category;
