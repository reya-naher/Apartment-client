import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddHouse = () => {
    const { register, handleSubmit } = useForm();
    const [file, setFile] = useState(null)

    const handleFileChange = (e) => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }

    const onSubmit = data => { 
        console.log(data)
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', data.name)
        formData.append('price', data.price)
        formData.append('address', data.address)
        formData.append('bedroom', data.bedroom)
        formData.append('bathroom', data.bathroom)

        fetch('https://fierce-depths-38221.herokuapp.com/addService',{
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(info => alert("successfully added"))
        .catch(err => console.log(err))
    };


    return (
        <section>
        <div className="row">
            <div className="col-md-2">
            <Sidebar></Sidebar>
            </div>
            <div className="col-md-8 col-sm-12 col-12">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-between mt-5">
                    <h3>Add House</h3>
                    <h5>UserName</h5>
                </div>
            </div>
            <form className="p-5 shadow-lg" onSubmit={handleSubmit(onSubmit)}>  
                    <div className="form-group row">
                        <div className="col-md-6">
                        <label>Service Title</label>
                        <input type="text"  name="name" placeholder="Service Title" className="form-control" ref={register} />
                        </div>

                        <div className="col-md-6">
                        <label>Price</label>
                        <input type="number"  name="price" placeholder="Price" className="form-control" ref={register}/>
                        </div>             
                    </div>
                    <div className="form-group row">
                        <div className="col-md-6">
                        <label>Location</label>
                        <input type="text"  name="address" placeholder="Location" className="form-control" ref={register}/>
                        </div>

                        <div className="col-md-6">
                        <label>No of Bedroom</label>
                        <input type="text"  name="bedroom" placeholder="Bedroom" className="form-control" ref={register}/>
                        </div>             
                    </div>
                    <div className="form-group row">
                        <div className="col-md-6">
                        <label>No Of Bathroom</label>
                        <input type="text"  name="bathroom" placeholder="Bathroom" className="form-control" />
                        </div>

                        <div className="col-md-6">
                        <label htmlFor="file">Thumbnail</label>
                        <input type="file" onChange={handleFileChange}  name="file" id="file"  className="form-control" />
                        </div>             
                    </div>
                    <div className="form-group">
                    <button style={{backgroundColor:"#275A53",float:"right"}} className="btn px-4 text-light">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    );
};

export default AddHouse;