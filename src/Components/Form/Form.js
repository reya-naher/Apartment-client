import React from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Form.scss'

const Form = (props) => {
  const {loginUser} = React.useContext(UserContext);
  const [loggedInUser] = loginUser;
  const homeDetials = props.homeDetail
  console.log(homeDetials)

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    const bookingInfo = {...data, status: "pending", HouseDetails: homeDetials}
    fetch('https://fierce-depths-38221.herokuapp.com/addBooking', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(bookingInfo)
    })
    .then(res => res.json())
    .then(data => {
      if(data) {
        alert("Your Booking Request Send Successfully!")
      }
    })
  };

  return (
    <div className="apartment-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="name" type="text" value={loggedInUser.name} placeholder="Full Name" ref={register}/>
        <input name="phone" type="text" placeholder="Phone No." ref={register}/>
        <input name="email" type="email"  value={loggedInUser.email} placeholder="Email Address" ref={register}/>
        <textarea name="massage" placeholder="massage" ref={register}></textarea>
        <button>Request Booking</button>
      </form>
    </div>
  );
};

export default Form;