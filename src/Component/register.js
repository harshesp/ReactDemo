import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'
import config from '../config/config';
import {RegisterAction} from '../Action/userAction';

function Register() {
    
    const [form, setForm] = useState({ first_name: "", last_name: "", email: "", password: "", confirm_password: "" })
    const [vil, setvil] = useState({ firstErr: false, lastErr: false, emailErr: false, passwordErr: false, confirm_passwordErr: false })
    const [validationerr, setvalidationerr] = useState({})
    const inputHandler = (e) => {
        const { name, value } = e.target
        setForm((old) => {
            return { ...old, [name]: value }
        })
    }
    function validation() {
        let first_nameerr = "";
        let last_nameerr = "";
        let emailerr = "";
        let passworderr = "";
        let confirm_passworderr = "";
 

        if (form.first_name === "") {
            first_nameerr = "first name requierd"
        }
        if (form.last_name === "") {
            last_nameerr = "last name requierd"
        }
        if (form.email === "") {
            emailerr = "email requierd"
        }
        if (form.password === "") {
            passworderr = "password requierd"
        }
        if (form.confirm_password === "") {
            confirm_passworderr = "confirm password requierd"
        }
       
        if (first_nameerr || last_nameerr || emailerr || passworderr || confirm_passworderr ) {
            setvalidationerr({
                first_nameerr, last_nameerr, emailerr, passworderr, confirm_passworderr
            })
            return false;
        } else { return true; }
    }
    const Submitform = async (e) => {
        e.preventDefault();
        const isValid = validation();
        if (!isValid) {
            // alert(" not form valid")
        } else {

            let res = await RegisterAction(form);
            if (res.success) {
                toast.success(res.msg)
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                toast.error(res.msg);
            }
          
        }
    }
    return (<div>



<Toaster />

        <div class="login-form-bg h-100">
            <div class="container h-100">
                <div class="row justify-content-center h-100">
                    <div class="col-xl-6">
                        <div class="form-input-content">
                            <div class="card login-form mb-0">
                                <div class="card-body pt-5">

                                    <a class="text-center"> <h4>Rosella</h4></a>

                                    <form class="mt-5 mb-5 login-input" onSubmit={Submitform}>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="First Name" name="first_name" onChange={inputHandler} />
                                            <span style={{ color: 'red' }}>{validationerr.first_nameerr}</span><br/>

                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Last Name" name="last_name" onChange={inputHandler} />
                                            <span style={{ color: 'red' }}>{validationerr.last_nameerr}</span><br/>
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Email" name="email" onChange={inputHandler} />
                                            <span style={{ color: 'red' }}>{validationerr.emailerr}</span><br/>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Password" name="password" onChange={inputHandler} />
                                            <span style={{ color: 'red' }}>{validationerr.passworderr}</span><br/>

                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Confirm Password" name="confirm_password" onChange={inputHandler} />
                                            <span style={{ color: 'red' }}>{validationerr.confirm_passworderr}</span><br/>
                                        </div>
                                       

                                        <button class="btn login-form__btn submit w-100">Sign in</button>
                                    </form>
                                    <p className="mt-5 login-form__footer"> have account?<Link to={`${config.baseUrl}`} > <a className="text-primary"> Sign In </a></Link> now
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



    );
}
export default Register;