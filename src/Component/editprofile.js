
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import config from '../config/config';

function EditProfile(){
    return(
        <div class="login-form-bg h-100">
        <div class="container h-100">
            <div class="row justify-content-center h-100">
                <div class="col-xl-6">
                    <div class="form-input-content">
                        <div class="card login-form mb-0">
                            <div class="card-body pt-5">
                                <a class="text-center" > <h4>Edit your Profile</h4></a>
        
                                <form class="mt-5 mb-5 login-input">
                                    <div class="form-group">
                                        <label>New Name</label>
                                        <input type="email" class="form-control" placeholder="Name"/>
                                    </div>
                                    <div class="form-group">
                                        <label>New Emails</label>
                                        <input type="email" class="form-control" placeholder="Email"/>
                                    </div>
                                    <div class="form-group">
                                        <label>New Mobile no.</label>
                                        <input type="email" class="form-control" placeholder="Mobile"/>
                                    </div>
                                    <div class="form-group">
                                    <label>New Password</label>
                                        <input type="password" class="form-control" placeholder="Password"/>
                                    </div>
                                   <Link to={`${config.baseUrl}profile`}> <button class="btn login-form__btn submit w-100">DONE</button></Link>
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default EditProfile;