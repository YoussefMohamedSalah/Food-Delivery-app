import React from 'react';
import styled from 'styled-components';
import { CgMenuLeft } from 'react-icons/cg';
import { MdNotificationsNone } from 'react-icons/md';
import { useContext } from 'react';
import { SideNavContext } from '../../Contexts/SideNavContext';
import SideNav from '../../Components/SideNav';

function OrderDetails() {
  const { handleTogleNav } = useContext(SideNavContext);

  return (
    <DivHeader>
      <SideNav />
      <DivSideNav>
        <CgMenuLeft onClick={() => handleTogleNav()} />
      </DivSideNav>
      <p>Details</p>
      <DivNotification>
        <MdNotificationsNone />
      </DivNotification>
    </DivHeader>
  );
}

const DivHeader = styled.div`
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

export default OrderDetails;
