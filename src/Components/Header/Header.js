import React from 'react';
import { Button, Container, Form, FormControl } from 'react-bootstrap';
import './Header.scss';


const Header = () => {
  return (
    <>
      <Container>
        <div className="cover">
          <div className="opacity-set d-flex align-items-center">
            <div className="text-div mx-auto">
              <h1>Find Your House Rent</h1>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button type="submit" className="search-btn">Search</Button>
              </Form>
            </div>    
          </div>
          </div>
      </Container>
      
    </>
  );
};

export default Header;