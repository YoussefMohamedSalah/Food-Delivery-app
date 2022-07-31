import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CgMenuLeft } from 'react-icons/cg';
import { MdNotificationsNone } from 'react-icons/md';
import { useContext } from 'react';
import { SideNavContext } from '../../Contexts/SideNavContext';
import SideNav from '../../Components/SideNav';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AllOrders from './AllOrders';
import OnDeliveryOrders from './OnDeliveryOrders';
import DoneOrders from './DoneOrders';

function Orders() {
  const [input, setInput] = useState('');
  const [orderTab, setOrderTab] = useState('all');

  const changeTab = function () {
    if (orderTab === 'all') {
      return <AllOrders />;
    } else if (orderTab === 'onDelivery') {
      return <OnDeliveryOrders />;
    } else {
      return <DoneOrders />;
    }
  };

  const Navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    Navigate('/orders/' + input);
  };

  const { handleTogleNav } = useContext(SideNavContext);

  return (
    <>
      <DivOrders>
        <SideNav />
        <DivSideNav>
          <CgMenuLeft onClick={() => handleTogleNav()} />
        </DivSideNav>
        <p>Orders</p>
        <DivNotification>
          <MdNotificationsNone />
        </DivNotification>
      </DivOrders>
      {/* notification sec */}
      <FormStyled onSubmit={submitHandler}>
        <div>
          <FaSearch />
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            value={input}
            placeholder="Search Order ID Or Product"
          />
        </div>
      </FormStyled>
      {/* chose section */}
      <DivPageWrapper className="page--content--wrapper">
        <DivFiltersBtns className="filters--btns">
          <button onClick={() => setOrderTab('all')} className="active">
            All
          </button>
          <button onClick={() => setOrderTab('onDelivery')}>On Delivery</button>
          <button onClick={() => setOrderTab('done')}>Done</button>
        </DivFiltersBtns>
        <DivOrderPageContent className="orderPageContent">
          {changeTab()}
        </DivOrderPageContent>
        <DivPlaceOrderBtn>
          <PlaceOrderBtn>Place Order</PlaceOrderBtn>
        </DivPlaceOrderBtn>
      </DivPageWrapper>
    </>
  );
}

const DivOrders = styled.div`
  width: 100%;
  height: 4rem;
  color: black;
  display: flex;
  position: sticky;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 5px 10px rgb(0 0 0 / 10%);
  p {
    font-size: 25px;
    font-weight: 600;
  }
`;
const DivSideNav = styled.div`
  svg {
    padding-left: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    color: black;
    cursor: pointer;
  }
`;
const DivNotification = styled.div`
  svg {
    padding-right: 2rem;
    width: 1.5rem;
    height: 1.5rem;
    color: #3cbb72;
    cursor: pointer;
  }
`;
// -----------------
const FormStyled = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 1.5rem 1rem 1.5rem 0rem;

  div {
    width: 60rem;
    position: relative;
  }

  input {
    border: none;
    /* background: linear-gradient(35deg, #494949, #313131); */
    background: #f7f7f7;
    font-size: 1rem;
    color: #000000;
    padding: 1.5rem 2.5rem;
    border-radius: 1rem;
    outline: none;
    width: 90%;
    text-indent: 1rem;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: #777777;
  }
`;
// ----------filters btns
const DivFiltersBtns = styled.div`
  width: 90%;
  background-color: #f1f1f1;
  height: 4rem;
  border-radius: 1rem;
  height: 12%;
  /* -- */
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    height: 3rem;
    background-color: transparent;
    margin: 0.5rem;
    width: 32%;
    border: none;
    border-radius: 1rem;
    color: #0000008a;
    font-size: 1.1em;
    cursor: pointer;
  }
  button.active {
    background-color: #fff;
    color: #222222;
  }
`;
const DivPageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 75.3vh;
  max-height: 100%;
  justify-content: space-between;
`;
const DivOrderPageContent = styled.div`
  width: 100%;
  height: 75%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const DivPlaceOrderBtn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
`;
const PlaceOrderBtn = styled.button`
  display: flex;
  height: 13%;
  align-items: center;
  justify-content: center;
  border: none;
  height: 3.5rem;
  margin: 0.5rem;
  border-radius: 10px;
  color: white;
  background-color: #309f5f;
  font-size: 16px;
  padding: 20px 30px;
  height: auto;
  line-height: 1.3;
  font-weight: 600;
  border-radius: 12px;
  text-decoration: none;
  width: 90%;
  cursor: pointer;
`;

export default Orders;
