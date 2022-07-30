import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header';
import SearchBar from '../../Components/SearchBar';
import Category from '../category/category';
import Carousel from '../../Components/Carousel';
import TopRated from '../../Components/TopRated';

function Main() {
  return (
    <DivMainWrapper>
      <Header />
      <div id="mainContent">
        <SearchBar />
        <Category />
        <Carousel />
        <TopRated />
      </div>
    </DivMainWrapper>
  );
}

const DivMainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
  max-height: 100%;
  #mainContent {
    padding: 0rem 3rem 0rem 3rem;
  }
`;

export default Main;
