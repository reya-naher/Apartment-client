import React from 'react';
import { Container,Row } from 'react-bootstrap';
import data from '../../FakeData/HouseData/HouseData';
import House from '../House/House';

const HouseRent = () => {
  return (
    <Container>
      <div className="text-center">
      <h6>House Rent</h6>
      <h2>
        Discover The Latest Rent <br /> Available Today
      </h2>
      </div>

      <Row className="d-flex justify-content-center">

    {
      data.map((item, index) => <House key={index} item={item}></House>)
    }
      </Row>
      </Container>
  );
};

export default HouseRent;