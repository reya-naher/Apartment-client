import React from 'react';
import { Container,Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import House from '../House/House';
import './HouseRent.scss';

const HouseRent = () => {

  const {apartment} = React.useContext(UserContext)
  const [apartments] = apartment;

  return (
    <Container>
      <div className="text-center m-5">
      <h6 className="houseRent-header">House Rent</h6>
      <h2>
        <b>Discover The Latest Rent <br /> Available Today</b>
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