import React from 'react';
import styled from 'styled-components';
// import LogoIcon from '../../Images/food-svgrepo-com.svg';
import { useNavigate } from 'react-router-dom';
import Facebook from '../../Images/image 7.png';
import Gmail from '../../Images/icons8-google-96.png';
// import { MdOutlineFastfood } from 'react-icons/md';
import { GiFullPizza } from 'react-icons/gi';

function SubSignIn() {
  const Navigate = useNavigate();
  return (
    <DivContainer>
      <DivPageContent className="page-content">
        <DivLogoContainer className="view-logo">
          <DivIconWrraper className="icon-holder">
            {/* <MdOutlineFastfood /> */}
            <GiFullPizza />
          </DivIconWrraper>
          <h2>Welcome back</h2>
          {/* <h2>Now</h2> */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
            praesentium. Quas, ad.
          </p>
        </DivLogoContainer>
        <DivFormControl>
          <form>
            <input
              type="text"
              placeholder="info@example.com"
              class="form-control input-with-value"
            />
            <input
              type="Password"
              placeholder="password"
              class="form-control input-with-value"
            />
            <SIgnUpBtn onClick={() => Navigate('/main')}>LOGIN</SIgnUpBtn>
          </form>
        </DivFormControl>
        <DivSignInOptions>
          <p>Or sign in with </p>
          <DivIcon>
            <img src={Gmail} alt="gmail-icon" />
            <img src={Facebook} alt="facebook-icon" />
          </DivIcon>
        </DivSignInOptions>
        <DivLogin>
          <p id="forget-password">
            Forget Password? <span>Reset Password</span>
          </p>
          <p>Dont Have Any Account?</p>
          <CreateBtn onClick={() => Navigate('/signup')}>
            CREATE MY ACCOUNT
          </CreateBtn>
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
const DivSignInOptions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  p {
    color: #777777;
  }
`;
const DivIcon = styled.div`
  img {
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    margin-left: 0.7rem;
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
      text-indent: 1.5rem;
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
    line-height: 2;
  }
  #forget-password {
    color: black;
  }
  #forget-password span {
    color: #3cbb72;
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
const CreateBtn = styled.button`
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
  font-weight: 400;
  border-radius: 12px;
  text-decoration: none;
  width: 100%;
  cursor: pointer;
`;
export default SubSignIn;
