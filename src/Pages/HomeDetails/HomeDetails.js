import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
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

  const apartmentImages =["https://i.ibb.co/XW6DhQL/Rectangle-408.png",
    "https://i.ibb.co/SfJdrW0/Rectangle-409.png",
    "https://i.ibb.co/cL9mb08/Rectangle-410.png",
    "https://i.ibb.co/64w6rC1/Rectangle-407.png" ]

  return (
    <>
      <div className="container">
        <NavBar></NavBar>
      </div>
      <div className="coverImg">
        <h3>Apartment</h3>
      </div>
      <div className="main-container container">
        <div className="row">
          <div className="apartment-img col-md-8">
            <div className="main-img">
              <img src={homeDetails.image} alt=""/>
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
                <h3>{homeDetails.name}</h3>
                <h3>${homeDetails.price}</h3>
              </div>
              <p>3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.</p>
              <div className="price-details">
              <h3>Price Details- </h3>
              <p>Rent/Month: $550 (negotiable)</p>
              <p>Service Charge : 8,000/= Tk per month, subject to change</p>
              <p>Security Deposit : 3 month’s rent</p>
              <p>Flat Release Policy : 3 months earlier notice required</p>
              </div>
              <div className="property-details">
                <h3>Property Details</h3>
                <p>Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.
                Flat Size : 3000 Sq Feet.
                Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)
                Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.
                Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.
                Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera
                </p>
              </div>
            </div>
          </div>
          <div className="apartment-form col-md-4">
            <form>
              <input type="text" placeholder="Full Name"/>
              <input type="number" placeholder="Phone No."/>
              <input type="email" placeholder="Email Address"/>
              <textarea name="massage" placeholder="massage"></textarea>
              <button>Request Booking</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDetails;
