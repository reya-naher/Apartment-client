import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.scss';

const Service = ({item}) => {
  return (
<Col
      md={4}
      sm={6}
      xs={12}>
      <Card
        className="service text-center mb-5"
        style={{ width: '18rem' }}>
        <Card.Img
          className="mx-auto m-2"
          variant="top"
          src={item.image}
          width="200px"/>
        <Card.Body>
          <Card.Title>
            {item.name}
          </Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>

        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;