import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGooglePlus, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  let url = ""
  return (
    <Container id="contact" className="footer p-5 m-5">
      <Row>
        <Col md={4}>
          <p>
            <FontAwesomeIcon
              style={{
                fontSize: "20px",
                color: "white"
              }}
              icon={faMapMarker} />
              H#34-0 (4th Floor), Road #24
               <br />
          Now DOHS, Mohakahali, Dhaka, Bangladesh
          <br />
          Phone: 080898978687
          <br />
          Email:info@gmail.com
          </p>
        </Col>
        <Col md={8}>
          <Row>
            <Col md={4}>
          <p> H#34-0 (4th Floor), Road #24 <br />
          Now DOHS, Mohakahali, Dhaka, Bangladesh <br/>
          Phone: 080898978687<br />
          Email:info@gmail.com</p>       
            </Col>
            <Col md={2}>
              

              <ul className="footer-list">
                <li className="headline-footer">Company</li>
                <br />
                <li><a href={url}>About</a></li>
                <li><a href={url}>Site Map</a></li>
                <li><a href={url}>Support Center</a></li>
                <li><a href={url}>Terms Condition</a></li>
                <li><a href={url}>Submit Listing</a></li>
              </ul>
            </Col>
            <Col md={2}>
                 <ul className="footer-list">
                <li className="headline-footer">Quick Links</li>
                <br />
                <li><a href={url}>Quick Links</a></li>
                <li><a href={url}>Rentals</a></li>
                <li><a href={url}>Sales</a></li>
                <li><a href={url}>Contact</a></li>
                <li><a href={url}>Terms Condition</a></li>
                <li><a href={url}>Our Blog</a></li>
              </ul>
            </Col>
            <Col md={4}>
              <div className="footer-list">
                <p className="headline-footer">About Us</p>
                <p>We are the top real estate agency in sydney.With agents available to answer any question 24/7
                </p>
                <ul className="footer-social">
                  <li>
                    <a href={url}>
                      <FontAwesomeIcon
                        style={{ fontSize: "25px" }}
                        icon={faFacebook} />
                    </a>
                  </li>
                  <li>
                    <a href={url}>
                      <FontAwesomeIcon
                        style={{ fontSize: "25px" }}
                        icon={faTwitter} />
                    </a>
                  </li>
                  <li>
                    <a href={url}>
                      <FontAwesomeIcon
                        style={{ fontSize: "25px" }}
                        icon={faInstagram} />
                    </a>
                  </li>
                  <li>
                    <a href={url}>
                      <FontAwesomeIcon
                        style={{ fontSize: "25px" }}
                        icon={faGooglePlus} />
                    </a>
                  </li>
                  <li>
                    <a href={url}>
                      <FontAwesomeIcon
                        style={{ fontSize: "25px" }}
                        icon={faLinkedinIn} />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
        </Row>
</Container>
  );
};

export default Footer;