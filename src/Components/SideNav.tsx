import React, { useState } from 'react';
import { useContext } from 'react';
import { SideNavContext } from '../Contexts/SideNavContext';
import './sidenav.css';
import { Link } from 'react-router-dom';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgNotifications } from 'react-icons/cg';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { TbLayoutDashboard } from 'react-icons/tb';
import { AiOutlineSetting } from 'react-icons/ai';
import { ImSwitch } from 'react-icons/im';

function SideNav() {
  const { sideNav, handleTogleNav, setSideNav } = useContext(SideNavContext);
  return (
    <>
      <div className="sidenav-container" style={{ display: `${sideNav}` }}>
        <div className="sidenav">
          <div className="Nav-bar-header">
            <h2>Main Menu</h2>
            <AiOutlineCloseCircle onClick={() => handleTogleNav()} />
          </div>
          <div className="Nav-bar">
            <ul>
              <li
                onClick={() => setSideNav('none')}
                style={{ backgroundColor: '#EBF6F0' }}>
                <Link to={'/main'}>
                  <AiOutlineHome />
                  <span>Home</span>
                </Link>
              </li>
              <li onClick={() => setSideNav('none')}>
                {' '}
                <Link to={'/orders'}>
                  <AiOutlineShoppingCart />
                  <span>My Order</span>
                </Link>
              </li>
              <li onClick={() => setSideNav('none')}>
                {' '}
                <Link to={'/notifications'}>
                  <CgNotifications />
                  <span>Notifications</span>
                </Link>
              </li>
              <li onClick={() => setSideNav('none')}>
                {' '}
                <Link to={'/profile'}>
                  <BsPerson />
                  <span>Profile</span>
                </Link>
              </li>
              <li onClick={() => setSideNav('none')}>
                {' '}
                <Link to={'/messages'}>
                  <AiOutlineMail />
                  <span>Messages</span>
                </Link>
              </li>
              <li>
                {' '}
                <Link to={'/elements'}>
                  <TbLayoutDashboard />
                  <span>Elements</span>
                </Link>
              </li>
              <li onClick={() => setSideNav('none')}>
                {' '}
                <Link to={'/settings'}>
                  <AiOutlineSetting />
                  <span>Settings</span>
                </Link>
              </li>
              <li onClick={() => setSideNav('none')}>
                {' '}
                <Link to={'/'}>
                  <ImSwitch />
                  <span>Logout</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="Nav-bar-footer">
            <h5>Youssef Food Delivery</h5>
            <p>App Version 1.0.0</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideNav;
