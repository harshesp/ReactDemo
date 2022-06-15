
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import config from '../config/config';


function Login(){
    const navi=useNavigate();

    return(  <div class="login-form-bg h-100">
    <div class="container h-100">
        <div class="row justify-content-center h-100">
            <div class="col-xl-6">
                <div class="form-input-content">
                    <div class="card login-form mb-0">
                        <div class="card-body pt-5">
                            <a class="text-center" > <h4>Rosella</h4></a>
    
                            <form class="mt-5 mb-5 login-input">
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="Email"/>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="Password"/>
                                </div>
                                 <button onClick={() => navi(`${config.baseUrl}dashboard`)} class="btn mb-1 btn-outline-primary">Sign In to</button> 
                              
                            </form>
                            <p class="mt-5 login-form__footer">Dont have account?<Link to={`${config.baseUrl}register`} > <a class="text-primary"> Sign Up </a></Link> now
                                    </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
);
}export default Login;