import React from 'react';
import { Container,Row } from 'react-bootstrap';
import data from '../../FakeData/HouseData/HouseData';
import House from '../House/House';

const HouseRent = () => {
  return (
    <Container>
    <Row className="d-flex justify-content-center">
    {
      data.map((item, index) => <House key={index} item={item}></House>)
    }
      </Row>
      </Container>
  );
};

export default HouseRent;