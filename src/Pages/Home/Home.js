import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import HouseRent from '../../Components/HouseRent/HouseRent';
import NavBar from '../../Components/NavBar/NavBar';
import Services from '../../Components/Services/Services';

const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
      <HouseRent></HouseRent>
      <Services></Services>
      <Footer></Footer>
    </>
  );
};

export default Home;