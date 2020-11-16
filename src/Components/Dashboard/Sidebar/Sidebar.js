import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket,  faPlus,  faHome } from '@fortawesome/free-solid-svg-icons'

import logo from '../../../images/Logo.png'


const Sidebar = () => {
   
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-12  px-4 "  style={{ height: "100vh" }}>
            <ul className="list-unstyled p-5">  
                <img src={logo} style={{height:'50px'}} className="mb-5" alt=""/> 
                        
                    <li>
                        <Link to="/bookinglist"  className="text-dark">
                               <p><FontAwesomeIcon icon={faShoppingBasket} /><span>Booking List</span></p> 
                        </Link>
                    </li>
                    <li>
                        <Link to="/addhouse"  className="text-dark">
                           <p><FontAwesomeIcon icon={faPlus} /> <span>Add House</span></p> 
                        </Link>
                    </li>
                    <li>
                        <Link to="/myrent" className="text-dark">
                           <p> <FontAwesomeIcon icon={faHome} /> <span>My Rent</span></p>
                        </Link>
                    </li>
            </ul>
        </div>
    );
};

export default Sidebar;