import React from 'react';
import { Button } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';

const MyRent = () => {
    return (
        <div>
        <section className="row">
      <div className="col-md-2">
      <Sidebar></Sidebar>
      </div>
      <div className="col-md-8 col-sm-12 col-12">
      <div className="row">
           <div className="col-md-12 d-flex justify-content-between mt-5">
               <h3>MyRent</h3>
               <h5>UserName</h5>
           </div>
       </div>
        <table className="table table-borderless shadow-lg mt-5">
       <thead style={{backgroundColor:'#EEF3FA'}}>
           <tr>
           <th className="text-secondary  w-50" scope="col">House Name</th>
           <th className="text-secondary  w-25" scope="col">Price</th>
           <th className="text-secondary w-50" scope="col">Action</th>
           </tr>
       </thead>
       <tbody>
           {/* {
             orders.map((order, index) =>  */}
                   
               <tr>
                   <td>Gorgeous House</td>
                   <td>$566</td>
                   <td><Button style={{backgroundColor:'#275A53'}}>View Details</Button> </td>
                  
               </tr>
               {/* ) */}
           {/* } */}
       </tbody>
   </table>
   </div>
  </section>
   </div>
    );
};

export default MyRent;