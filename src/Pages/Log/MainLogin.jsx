import React from 'react';
import styled from 'styled-components';
import LogoIcon from '../../Images/food-svgrepo-com.svg';
import { Link } from 'react-router-dom';
import { GiFullPizza } from 'react-icons/gi';

function MainLogin() {
  return (
    <DivContainer className="container">
      <DivPageContent className="page-content">
        <DivLogoContainer className="view-logo">
          <DivIconWrraper className="icon-holder">
            {/* <img src={LogoIcon} alt="icon" /> */}
            <GiFullPizza />
          </DivIconWrraper>
          <h2>Food Hub</h2>
          <p>Food Delivery</p>
        </DivLogoContainer>
        <DivSwiperBox className="swiper-box">
          <div className="slider-info">
            <DivSliderContent className="slider-content">
              <h2>
                Food, For pretty much
                <br />
                Any Time
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus dolore modi.
              </p>
            </DivSliderContent>
          </div>
        </DivSwiperBox>
      </DivPageContent>
      <DivBtnsWrapper>
        <SIgnUplink to={'/signup'}>SIGN UP</SIgnUplink>
        <Loginlink to={'/signin'}>LOGIN</Loginlink>
      </DivBtnsWrapper>
    </DivContainer>
  );
}

const DivContainer = styled.div`
  min-height: 95.5vh;
  max-height: 100%;
  background-color: #309f5f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  color: white;
`;
const DivPageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DivLogoContainer = styled.div`
  padding: 3rem;
  h2 {
    padding-top: 1.5rem;
  }
`;
const DivSwiperBox = styled.div`
  height: 9rem;
  padding-top: 6rem;
`;
const SIgnUplink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  height: 3.5rem;
  margin: 0.5rem;
  border-radius: 10px;
  color: white;
  background-color: #ff7f23;
  font-size: 16px;
  padding: 20px 30px;
  height: auto;
  line-height: 1.3;
  font-weight: 600;
  border-radius: 12px;
  text-decoration: none;
`;
const Loginlink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  height: 3.5rem;
  margin: 0.5rem;
  border-radius: 10px;
  color: white;
  background-color: #3cbb72;
  font-size: 16px;
  padding: 20px 30px;
  height: auto;
  line-height: 1.3;
  font-weight: 600;
  border-radius: 12px;
  text-decoration: none;
`;
const DivSliderContent = styled.div`
  flex-direction: column;
  justify-content: center;
  display: flex;
  align-items: center;
  h2 {
    text-align: center;
  }
  p {
    padding-top: 1rem;
  }
`;

const DivIconWrraper = styled.div`
  width: 5rem;
  background-color: white;
  padding: 1rem;
  border-radius: 20px;
  svg {
    color: #3cbb72;
    width: 5rem;
    height: 4rem;
  }
`;
const DivBtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
// const SignUp = styled.button`
//   border: none;
//   height: 3.5rem;
//   margin: 0.5rem;
//   border-radius: 10px;
//   color: white;
//   background-color: #ff7f23;
//   font-size: 16px;
//   padding: 20px 30px;
//   height: auto;
//   line-height: 1.3;
//   font-weight: 600;
//   border-radius: 12px;
// `;
// const Login = styled.button`
//   border: none;
//   height: 3.5rem;
//   margin: 0.5rem;
//   border-radius: 10px;
//   color: white;
//   background-color: #3cbb72;
//   font-size: 16px;
//   padding: 20px 30px;
//   height: auto;
//   line-height: 1.3;
//   font-weight: 600;
//   border-radius: 12px;
// `;

export default MainLogin;
