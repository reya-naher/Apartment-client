import React from 'react';
import { Container,Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import House from '../House/House';

const HouseRent = () => {

  const {apartment} = React.useContext(UserContext)
  const [apartments] = apartment;

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
      apartments.map((item, index) => <House key={index} item={item}></House>)
    }
      </Row>
      </Container>
  );
};

export default HouseRent;