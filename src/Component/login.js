
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import config from '../config/config';


function Login(){
    const navi=useNavigate();

    return(  <div className="login-form-bg h-100">
    <div className="container h-100">
        <div className="row justify-content-center h-100" style={{background: "red"}}>
            <div className="col-xl-6">
                <div className="form-input-content" >
                    <div className="card login-form mb-0">
                        <div className="card-body pt-5">
                            <a className="text-center" > <h4>Rosella</h4></a>
    
                            <form className="mt-5 mb-5 login-input" >
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password"/>
                                </div>
                                 <button onClick={() => navi(`${config.baseUrl}dashboard`)} className="btn mb-1 btn-outline-primary">Sign In to</button> 
                              
                            </form>
                            <p className="mt-5 login-form__footer">Dont have account?<Link to={`${config.baseUrl}register`} > <a className="text-primary"> Sign Up </a></Link> now
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