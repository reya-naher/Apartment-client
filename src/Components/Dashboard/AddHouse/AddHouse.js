import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Button } from 'react-bootstrap';

const AddHouse = () => {
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
            <form className="p-5 shadow-lg">  
                    <div className="form-group row">
                        <div className="col-md-6">
                        <label htmlFor="">Service Title</label>
                        <input type="text"  name="price" placeholder="title" className="form-control" />
                        </div>

                        <div className="col-md-6">
                        <label htmlFor="">Price</label>
                        <input type="text"  name="file" placeholder="Price" className="form-control" />
                        </div>             
                    </div>
                    <div className="form-group row">
                        <div className="col-md-6">
                        <label htmlFor="">Location</label>
                        <input type="text"  name="price" placeholder="Location" className="form-control" />
                        </div>

                        <div className="col-md-6">
                        <label htmlFor="">No of Bedroom</label>
                        <input type="text"  name="file" placeholder="Bedroom" className="form-control" />
                        </div>             
                    </div>
                    <div className="form-group row">
                        <div className="col-md-6">
                        <label htmlFor="">No Of Bathroom</label>
                        <input type="text"  name="price" placeholder="Bathroom" className="form-control" />
                        </div>

                        <div className="col-md-6">
                        <label htmlFor="">Thumbnail</label>
                        <input type="file"  name="file"  className="form-control" />
                        </div>             
                    </div>
                    <div className="form-group">
                    <p className="text-right"><Button style={{backgroundColor:'#275A53',width:'200px'}} >Submit</Button></p>
                    </div>
                </form>
            </div>
        </div>
    </section>
    );
};

export default AddHouse;