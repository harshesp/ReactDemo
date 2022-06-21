import React from "react";
import { Link } from "react-router-dom";
import config from '../config/config';

function Sidebar(){
    return(
<div className="nk-sidebar">
  <div className="nk-nav-scroll">
    <ul className="metismenu" id="menu">
      <li className="nav-label">Dashboard</li>
      <li>
        <a
          className="has-arrow"
          href="javascript:void()"
          aria-expanded="false"
        >
          <i className="icon-speedometer menu-icon" />
          <span className="nav-text">Dashboard</span>
        </a>
        <ul aria-expanded="false">
          <li>
          <Link to={`${config.baseUrl}dashboard`}><a>Home 1</a></Link>
          </li>
          {/* <li><a href="./index-2.html">Home 2</a></li> */}
        </ul>
      </li>
    </ul>
  </div>
</div>
)
}
export default Sidebar;