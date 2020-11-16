import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import HouseRent from '../../Components/HouseRent/HouseRent';
import NavBar from '../../Components/NavBar/NavBar';
import Services from '../../Components/Services/Services';

const Home = () => {
  return (
    <div className="home-part" style={{"backgroundColor":"#F1F6F4"}}>
      <NavBar></NavBar>
      <Header></Header>
      <HouseRent></HouseRent>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
};

export default Home;