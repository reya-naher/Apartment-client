import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './House.scss';

const House = ({ item }) => {
  const history = useHistory()
  const handleDetails = (id) => {
    history.push(`/home/${id}`);
  }
  return (
    <Col
      md={4}
      sm={6}
      xs={12}>
      <Card
        className="house-card"
        style={{ width: '18rem' }}>
        <Card.Img
          className="mx-auto m-2"
          // variant="top"
          src={item.image} />
        <Card.Body>
          <Card.Title>
            {item.name}
          </Card.Title>
          <Card.Text>
            <p>{item.address}</p>
            <p><span>{item.bedRoom}</span> <span>{item.bathRoom}</span>
            </p>
            <div className="d-flex justify-content-between">
              <div>{item.price}</div>
            {/* <Link to={`home/${item.id}`}> */}
                <Button
                  onClick={()=>handleDetails(item.id)}
                  className="details-btn">View Details</Button> 
            {/* </Link> */}
            </div>
          </Card.Text>

        </Card.Body>
      </Card>
    </Col>
  );
};

export default House;