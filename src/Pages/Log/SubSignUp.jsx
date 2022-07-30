import React from 'react';
import styled from 'styled-components';
import LogoIcon from '../../Images/food-svgrepo-com.svg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { GiFullPizza } from 'react-icons/gi';


function SubSignUp() {
  const Navigate = useNavigate();
  return (
    <DivContainer>
      <DivPageContent className="page-content">
        <DivLogoContainer className="view-logo">
          <DivIconWrraper className="icon-holder">
            {/* <img src={LogoIcon} alt="icon" /> */}
            <GiFullPizza />
          </DivIconWrraper>
          <h2>Start Your Journy</h2>
          <h2>Now</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
            praesentium. Quas, ad.
          </p>
        </DivLogoContainer>
        <DivFormControl>
          <form>
            <input
              type="text"
              placeholder="First Name"
              class="form-control input-with-value"
            />
            <input
              type="text"
              placeholder="Email Address"
              class="form-control input-with-value"
            />
            <input
              type="Password"
              placeholder="password"
              class="form-control input-with-value"
            />
            <SIgnUpBtn onClick={() => Navigate('/main')}>SIGN UP</SIgnUpBtn>
          </form>
        </DivFormControl>
        <DivLogin>
          <p>Already Have An Account?</p>
          <LoginBtn onClick={() => Navigate('/signin')}>LOGIN</LoginBtn>
        </DivLogin>
      </DivPageContent>
    </DivContainer>
  );
}

const DivContainer = styled.div`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
  box-sizing: border-box;
`;
const DivPageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DivLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  h2 {
    padding-top: 1.5rem;
    line-height: 0.5;
  }
  p {
    line-height: 4;
  }
`;
const DivIconWrraper = styled.div`
  width: 5rem;
  background-color: white;
  padding: 1rem;
  background-color: #fff;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 5px 10px rgb(0 0 0 / 10%);
  svg {
    color: #3cbb72;
    width: 3rem;
    height: 3rem;
  }
`;
const DivFormControl = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    flex-direction: column;
    display: flex;
    width: 100%;
    input {
      padding: 1rem;
      margin-bottom: 1.5rem;
      border: 1px solid rgb(0 0 0 /10%);
      border-radius: 15px;
      box-shadow: 0 5px 10px rgb(0 0 0 / 10%);
      outline: none;

    }
  }
`;
const DivLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  p {
    color: #777777;
  }
`;
const SIgnUpBtn = styled.button`
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
  width: 100%;
  cursor: pointer;
`;
const LoginBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  height: 3.5rem;
  margin: 0.5rem;
  border-radius: 10px;
  color: white;
  background-color: #e5e5e5;
  color: #646464;
  font-size: 16px;
  padding: 20px 30px;
  height: auto;
  line-height: 1.3;
  font-weight: 600;
  border-radius: 12px;
  text-decoration: none;
  width: 100%;
  cursor: pointer;
`;
export default SubSignUp;
