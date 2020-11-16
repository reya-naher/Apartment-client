import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const BookingList = () => {
    return (
        <div>
             <section className="row">
           <div className="col-md-2">
           <Sidebar></Sidebar>
           </div>
           <div className="col-md-8 col-sm-12 col-12">
           <div className="row">
                <div className="col-md-12 d-flex justify-content-between mt-5">
                    <h3>Booking List</h3>
                    <h5>UserName</h5>
                </div>
            </div>
             <table className="table table-borderless shadow-lg mt-5">
            <thead style={{backgroundColor:'#EEF3FA'}}>
                <tr>
                <th className="text-secondary  w-25" scope="col">Name</th>
                <th className="text-secondary  w-25" scope="col">Email</th>
                <th className="text-secondary " scope="col">Phone</th>
                <th className="text-secondary  w-50" scope="col">Message</th>
                <th className="text-secondary w-25" scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {/* {
                  orders.map((order, index) =>  */}
                        
                    <tr>
                        <td>Jahed sabbir</td>
                        <td>Jahed.sabbir.bd@gmail.com</td>
                        <td>018888888</td>
                        <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, quod?</td>
                        <td>
                            
                         <select name="" id="" style={{border:'none'}}>
                            <option value="" style={{color:'#FF4B4B'}}>Pending</option>
                            <option value="" style={{color:'#FFBF45'}}>Ongoing</option>
                           <option value="" style={{color:'#24A35E'}}>Done</option>
                         </select>
                        </td>
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

export default BookingList;