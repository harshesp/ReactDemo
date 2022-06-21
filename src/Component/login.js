
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from 'react-router-dom';
import config from '../config/config';
import { LoginAction } from '../Action/userAction';
import Cookies from 'js-cookie';


function Login() {
    const loginData = (!Cookies.get('success')) ? [] : JSON.parse(Cookies.get('success'));

    if(loginData==''){
  
    }else{

        window.location.href=`${config.baseUrl}dashboard`;
    }
    const [form, setform] = useState({ email: "", password: "" });
    const [valid, setvalid] = useState({});
    function InputHandler(e) {
        const { name, value } = e.target;
        setform((old) => {
            return { ...old, [name]: value }
        })
    }
    async function Submit(e) {
        e.preventDefault();

        let isValid = Validation();
        if (!isValid) {

        } else {
            let res = await LoginAction(form);
            if (res.success) {
                toast.success(res.msg);
                Cookies.set('success', JSON.stringify(res.data));

                setTimeout(() => {
                    window.location.href = `${config.baseUrl}dashboard`;
                }, 2000);
            } else {
                toast.error(res.msg);
            }

        }
    }
    function Validation() {
        let emailerr = "";
        let passworderr = "";

        if (form.email === '') {
            emailerr = "email is required";
        }
        if (form.password === '') {
            passworderr = "password is required";
        }
        if (passworderr || emailerr) {
            setvalid({ emailerr, passworderr })
            return false;
        } else { return true; }
    }

    return (
        
        <div className="login-form-bg h-100">
            <Toaster />
            <div className="container h-100">
                <div className="row justify-content-center h-100" style={{ background: "red" }}>
                    <div className="col-xl-6">
                        <div className="form-input-content" >
                            <div className="card login-form mb-0">
                                <div className="card-body pt-5">
                                    <a className="text-center" > <h4>Rosella</h4></a>

                                    <form className="mt-5 mb-5 login-input" onSubmit={Submit} >
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email" name="email" onChange={InputHandler} />
                                            <span className="validationError">{valid.emailerr}</span>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Password" name="password" onChange={InputHandler} />
                                            <span className="validationError">{valid.passworderr}</span>
                                        </div>
                                        <button className="btn mb-1 btn-outline-primary">Sign In to</button>

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
} export default Login;