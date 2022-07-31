import React from 'react';
import Header from '../../Components/Header';
import SearchBar from '../../Components/SearchBar';
import Category from '../category/category';
import Carousel from '../../Components/Carousel';
import TopRated from '../../Components/TopRated';
import SideNav from '../../Components/SideNav';
import './Main.css';

function Main() {
  return (
    <div className="project-main-page">
      <SideNav />
      <div className="main--page-wrraper">
        <Header />
        <div id="mainContent">
          <SearchBar />
          <Category />
          <Carousel />
          <TopRated />
        </div>
      </div>
    </div>
  );
}

export default Main;
