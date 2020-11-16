import React from 'react';
import { Container, Row } from 'react-bootstrap';
import serviceData from '../../FakeData/ServiceData/ServiceData'
import Service from '../Service/Service';

const Services = () => {
  return (
    <Container>
      <div className="text-center">
      <h6>Service</h6>
      <h2>
        We're an agency tailored to all <br /> Clients' needs that allows delivers
      </h2>
      </div>
      <Row className="d-flex justify-content-center">
        {
          serviceData.map((item, index) => <Service key={index} item={item}></Service>)
        }
      </Row>
    </Container>
  );
};

export default Services;