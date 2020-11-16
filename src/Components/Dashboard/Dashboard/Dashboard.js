import React from 'react';
import MyRent from '../MyRent/MyRent';
import BookingList from '../BookingList/BookingList';
import AddHouse from '../AddHouse/AddHouse';

const Dashboard = () => {
    return (
        <div>
            <MyRent></MyRent>
            <BookingList></BookingList>
            <AddHouse></AddHouse>
        </div>
    );
};

export default Dashboard;