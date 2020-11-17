import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
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
        className="house-card m-3"
        style={{ width: '18rem' }}>
        {
          item.image.img ? 
          <Card.Img 
          src={`data:image/png;base64,${item.image.img}`}
          />
          :
          <Card.Img
          src={item.image}/>
        }
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
                <Button
                  onClick={()=>handleDetails(item.id)}
                  className="details-btn">View Details</Button> 
            </div>
          </Card.Text>

        </Card.Body>
      </Card>
    </Col>
  );
};

export default House;