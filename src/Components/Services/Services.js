import React from 'react';
import { Container, Row } from 'react-bootstrap';
import serviceData from '../../FakeData/ServiceData/ServiceData'
import Service from '../Service/Service';
import './Services.scss';

const Services = () => {
  return (
    <Container id="service">
      <div className="text-center m-5">
      <h6 className="service-header">Service</h6>
      <h2><b>
          We're an agency tailored to all <br /> Clients' needs that allows delivers
          </b>
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