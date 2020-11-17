import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('https://fierce-depths-38221.herokuapp.com/services')
    .then(res => res.json())
    .then(data => setServices(data))
  } ,[])
  return (
    <Container>
      <div className="text-center my-3">
      <h6>Service</h6>
      <h2>
        We're an agency tailored to all <br /> 
        Clients' needs that allows delivers
      </h2>
      </div>
      <Row className="d-flex flex-wrap justify-content-center">
        {
          services.map((item, index) => <Service key={index} item={item}></Service>)
        }
      </Row>
    </Container>
  );
};

export default Services;