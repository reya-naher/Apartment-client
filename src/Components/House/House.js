import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './House.scss';
import { faBath, faBed, faMapMarker } from '@fortawesome/free-solid-svg-icons';

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
          <div>
            <p><FontAwesomeIcon
              style={{ fontSize: "20px" }}
              icon={faMapMarker} />
              {item.address}
            </p>
            <p><span>
              <FontAwesomeIcon
                style={{ fontSize: "20px" }}
                icon={faBed} />
              {item.bedRoom}
            </span>
              <span>
                <FontAwesomeIcon
                  style={{ fontSize: "20px" }}
                  icon={faBath} />
                {item.bathRoom}
              </span>
            </p>
            <div className="d-flex justify-content-between">
              <div>{item.price}</div>
                <Button
                  onClick={()=>handleDetails(item.id)}
                  className="details-btn">View Details</Button> 

            </div>
          </div>

        </Card.Body>
      </Card>
    </Col>
  );
};

export default House;