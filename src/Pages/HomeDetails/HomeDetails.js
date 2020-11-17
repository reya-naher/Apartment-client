import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "../../Components/Form/Form";
import NavBar from "../../Components/NavBar/NavBar";
import fakeData from "../../FakeData/HouseData/HouseData";
import "./HomeDetails.scss";

const HomeDetails = () => {
  const {homeDetailsId} = useParams();
  const [homeDetails, setHomeDetails] = useState([]);

  useEffect(() => {
    const matchData = fakeData.find((item) => +item.id === +homeDetailsId);
    setHomeDetails(matchData);
  }, []);

  const apartmentImages = ["https://i.ibb.co/XW6DhQL/Rectangle-408.png",
    "https://i.ibb.co/SfJdrW0/Rectangle-409.png",
    "https://i.ibb.co/cL9mb08/Rectangle-410.png",
    "https://i.ibb.co/64w6rC1/Rectangle-407.png"]

  return (
    <>
      <div className="container">
        <NavBar></NavBar>
      </div>
      <div className="coverImg">
        <h3><b>Apartment</b></h3>
      </div>
      <div className="main-container container">
        <div className="row">
          <div className="apartment-img col-md-8">
            <div className="main-img">
              <img src={homeDetails.image} alt="" />
            </div>
            <div className="img-group">
              {
                apartmentImages.map((img, index) => 
                  <>
                    <img key={index+1} src={img} alt=""/>
                  </>
                )
              }
            </div>

            {/* apartment information */}
            <div className="apartment-info">
              <div className="title-bar">
                <h3><b>{homeDetails.name}</b></h3>
                <h3><b className="price-text"><span> $ </span><span>{homeDetails.price}</span></b></h3>
              </div>
              <p className="details-text">
                3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing <br /> Apartment for Rent in Rangs Malancha, Melbourne.
                </p>
              <div className="price-details">
                <h3>
                  <b>Price Details-</b>
                </h3>
                <p className="details-text">
                  Rent/Month: $550 (negotiable)
                  </p>
                <p className="details-text">
                  Service Charge : 8,000/= Tk per month, subject to change
                  </p>
                <p className="details-text">
                  Security Deposit : 3 month’s rent
                  </p>
                <p className="details-text">
                  Flat Release Policy : 3 months earlier notice required
                  </p>
              </div>
              <div className="property-details">
                <h3>
                  <b>Property Details</b>
                </h3>
                <p className="details-text">
                  Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.
                  Flat Size : 3000 Sq Feet.
                  Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)
                  Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.
                  Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.
                  Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            {/* form component */}
            <Form homeDetail={homeDetails}></Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDetails;
