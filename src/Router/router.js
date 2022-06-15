import React, { Component, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link,Switch } from 'react-router-dom';
import Dashboard from '../Component/dashboard';
// import Home from '../Component/home';
import Login from '../Component/login';
import Register from '../Component/register';
import Profile from '../Component/profile';
import EditProfile from '../Component/editprofile';
import config from '../config/config';

const RouterComponent = () => {
    return (<BrowserRouter >
            <div> 
                <Routes>
                    {/* <Route path={`${config.baseUrl}`} element={<Home/>} /> */}
                    <Route exact path={`${config.baseUrl}register`} element={<Register/>} />
                    <Route exact path={`${config.baseUrl}dashboard`} element={<Dashboard/>} />
                    <Route exact path={`${config.baseUrl}profile`} element={<Profile/>} />
                    <Route exact path={`${config.baseUrl}editprofile`} element={<EditProfile/>} />

                    <Route exact path={`${config.baseUrl}`} element={<Login/>} />
                </Routes>
            </div>
    </BrowserRouter>
    )
}
export default RouterComponent;