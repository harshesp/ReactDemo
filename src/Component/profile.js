
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import config from '../config/config';

function Profile(){
return(
<div >
 
  <div className="nav-header">
    <div className="brand-logo">
      <a href="index.html">
        <b className="logo-abbr">
          <img src="images/logo.png" alt="" />{" "}
        </b>
        <span className="logo-compact">
          <img src="./images/logo-compact.png" alt="" />
        </span>
        <span className="brand-title">
          <img src="images/logo-text.png" alt="" />
        </span>
      </a>
    </div>
  </div>

  <div className="header">
    <div className="header-content clearfix">
      <div className="nav-control">
        <div className="hamburger">
          <span className="toggle-icon">
            <i className="icon-menu" />
          </span>
        </div>
      </div>
      <div className="header-left">
        <div className="input-group icons">
          <div className="input-group-prepend">
            <span
              className="input-group-text bg-transparent border-0 pr-2 pr-sm-3"
              id="basic-addon1"
            >
              <i className="mdi mdi-magnify" />
            </span>
          </div>
          <input
            type="search"
            className="form-control"
            placeholder="Search Dashboard"
            aria-label="Search Dashboard"
          />
          <div className="drop-down   d-md-none">
            <form action="#">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="header-right">
        <ul className="clearfix">
          <li className="icons dropdown">
            <a href="javascript:void(0)" data-toggle="dropdown">
              <i className="mdi mdi-email-outline" />
              <span className="badge gradient-1 badge-pill badge-primary">
                3
              </span>
            </a>
            <div className="drop-down animated fadeIn dropdown-menu">
              <div className="dropdown-content-heading d-flex justify-content-between">
                <span className="">3 New Messages</span>
              </div>
              <div className="dropdown-content-body">
                <ul>
                  <li className="notification-unread">
                    <a href="javascript:void()">
                      <img
                        className="float-left mr-3 avatar-img"
                        src="images/avatar/1.jpg"
                        alt=""
                      />
                      <div className="notification-content">
                        <div className="notification-heading">Saiful Islam</div>
                        <div className="notification-timestamp">
                          08 Hours ago
                        </div>
                        <div className="notification-text">
                          Hi Teddy, Just wanted to let you ...
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-unread">
                    <a href="javascript:void()">
                      <img
                        className="float-left mr-3 avatar-img"
                        src="images/avatar/2.jpg"
                        alt=""
                      />
                      <div className="notification-content">
                        <div className="notification-heading">Adam Smith</div>
                        <div className="notification-timestamp">
                          08 Hours ago
                        </div>
                        <div className="notification-text">
                          Can you do me a favour?
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void()">
                      <img
                        className="float-left mr-3 avatar-img"
                        src="images/avatar/3.jpg"
                        alt=""
                      />
                      <div className="notification-content">
                        <div className="notification-heading">Barak Obama</div>
                        <div className="notification-timestamp">
                          08 Hours ago
                        </div>
                        <div className="notification-text">
                          Hi Teddy, Just wanted to let you ...
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void()">
                      <img
                        className="float-left mr-3 avatar-img"
                        src="images/avatar/4.jpg"
                        alt=""
                      />
                      <div className="notification-content">
                        <div className="notification-heading">
                          Hilari Clinton
                        </div>
                        <div className="notification-timestamp">
                          08 Hours ago
                        </div>
                        <div className="notification-text">Hello</div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="icons dropdown">
            <a href="javascript:void(0)" data-toggle="dropdown">
              <i className="mdi mdi-bell-outline" />
              <span className="badge badge-pill gradient-2 badge-primary">
                3
              </span>
            </a>
            <div className="drop-down animated fadeIn dropdown-menu dropdown-notfication">
              <div className="dropdown-content-heading d-flex justify-content-between">
                <span className="">2 New Notifications</span>
              </div>
              <div className="dropdown-content-body">
                <ul>
                  <li>
                    <a href="javascript:void()">
                      <span className="mr-3 avatar-icon bg-success-lighten-2">
                        <i className="icon-present" />
                      </span>
                      <div className="notification-content">
                        <h6 className="notification-heading">
                          Events near you
                        </h6>
                        <span className="notification-text">
                          Within next 5 days
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void()">
                      <span className="mr-3 avatar-icon bg-danger-lighten-2">
                        <i className="icon-present" />
                      </span>
                      <div className="notification-content">
                        <h6 className="notification-heading">Event Started</h6>
                        <span className="notification-text">One hour ago</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void()">
                      <span className="mr-3 avatar-icon bg-success-lighten-2">
                        <i className="icon-present" />
                      </span>
                      <div className="notification-content">
                        <h6 className="notification-heading">
                          Event Ended Successfully
                        </h6>
                        <span className="notification-text">One hour ago</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void()">
                      <span className="mr-3 avatar-icon bg-danger-lighten-2">
                        <i className="icon-present" />
                      </span>
                      <div className="notification-content">
                        <h6 className="notification-heading">Events to Join</h6>
                        <span className="notification-text">
                          After two days
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="icons dropdown d-none d-md-flex">
            <a
              href="javascript:void(0)"
              className="log-user"
              data-toggle="dropdown"
            >
              <span>English</span>{" "}
              <i className="fa fa-angle-down f-s-14" aria-hidden="true" />
            </a>
            <div className="drop-down dropdown-language animated fadeIn  dropdown-menu">
              <div className="dropdown-content-body">
                <ul>
                  <li>
                    <a href="javascript:void()">English</a>
                  </li>
                  <li>
                    <a href="javascript:void()">Dutch</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="icons dropdown">
            <div
              className="user-img c-pointer position-relative"
              data-toggle="dropdown"
            >
              <span className="activity active" />
              <img src="images/user/1.png" height={40} width={40} alt="" />
            </div>
            <div className="drop-down dropdown-profile   dropdown-menu">
              <div className="dropdown-content-body">
                <ul>
                  <li>
                  <Link to={`${config.baseUrl}profile`}><i className="icon-user" /> <span>Profile</span></Link>
                  </li>
                  <li>
                    <a href="email-inbox.html">
                      <i className="icon-envelope-open" /> <span>Inbox</span>{" "}
                      <div className="badge gradient-3 badge-pill badge-primary">
                        3
                      </div>
                    </a>
                  </li>
                  <hr className="my-2" />
                  <li>
                    <a href="page-lock.html">
                      <i className="icon-lock" /> <span>Lock Screen</span>
                    </a>
                  </li>
                  <li>
                    {/* <a href="page-login.html">
                      <i className="icon-key" /> <span>Logout</span>
                    </a> */}<Link to={`${config.baseUrl}`}><i className="icon-key" /> <span>Logout</span>
</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  {/***********************************
      Header end ti-comment-alt
  ************************************/}
  {/***********************************
      Sidebar start
  ************************************/}
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
  {/***********************************
      Sidebar end
  ************************************/}
  {/***********************************
      Content body start
  ************************************/}
  <div className="content-body">
    <div className="row page-titles mx-0">
      <div className="col p-md-0">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="javascript:void(0)">Dashboard</a>
          </li>
          <li className="breadcrumb-item active">
            <a href="javascript:void(0)">Home</a>
          </li>
        </ol>
      </div>
    </div>
    {/* row */}
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 col-xl-3">
          <div className="card">
            <div className="card-body">
              <div className="media align-items-center mb-4">
                <img
                  className="mr-3"
                  src="images/avatar/11.png"
                  width={80}
                  height={80}
                  alt=""
                />
                <div className="media-body">
                  <h3 className="mb-0">Pikamy Cha</h3>
                  <p className="text-muted mb-0">Canada</p>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col">
                  <div className="card card-profile text-center">
                    <span className="mb-1 text-primary">
                      <i className="icon-people" />
                    </span>
                    <h3 className="mb-0">263</h3>
                    <p className="text-muted px-4">Following</p>
                  </div>
                </div>
                <div className="col">
                  <div className="card card-profile text-center">
                    <span className="mb-1 text-warning">
                      <i className="icon-user-follow" />
                    </span>
                    <h3 className="mb-0">263</h3>
                    <p className="text-muted">Followers</p>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <button className="btn btn-danger px-5">Follow Now</button>
                </div>
              </div>
              <h4>About Me</h4>
              <p className="text-muted">
                Hi, I'm Pikamy, has been the industry standard dummy text ever
                since the 1500s.
              </p>
              <ul className="card-profile__info">
                <li className="mb-1">
                  <strong className="text-dark mr-4">Mobile</strong>{" "}
                  <span>01793931609</span>
                </li>
                <li>
                  <strong className="text-dark mr-4">Email</strong>{" "}
                  <span>name@domain.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-xl-9">
          <div className="card">
            <div className="card-body">
              <form action="#" className="form-profile">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="textarea"
                    id="textarea"
                    cols={30}
                    rows={2}
                    placeholder="Post a new message"
                    defaultValue={""}
                  />
                </div>
                <div className="d-flex align-items-center">
                  <ul className="mb-0 form-profile__icons">
                    <li className="d-inline-block">
                      <button className="btn btn-transparent p-0 mr-3">
                        <i className="fa fa-user" />
                      </button>
                    </li>
                    <li className="d-inline-block">
                      <button className="btn btn-transparent p-0 mr-3">
                        <i className="fa fa-paper-plane" />
                      </button>
                    </li>
                    <li className="d-inline-block">
                      <button className="btn btn-transparent p-0 mr-3">
                        <i className="fa fa-camera" />
                      </button>
                    </li>
                    <li className="d-inline-block">
                      <button className="btn btn-transparent p-0 mr-3">
                        <i className="fa fa-smile" />
                      </button>
                    </li>
                  </ul>
                  <button className="btn btn-primary px-3 ml-4">Send</button>
                </div>
              </form>
            </div>
          </div>
          <div>
          <Link to={`${config.baseUrl}editprofile`}><button className="btn btn-primary px-3 ml-4">Edit Profile</button></Link>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="media media-reply">
                <img
                  className="mr-3 circle-rounded"
                  src="images/avatar/2.jpg"
                  width={50}
                  height={50}
                  alt="Generic placeholder image"
                />
                <div className="media-body">
                  <div className="d-sm-flex justify-content-between mb-2">
                    <h5 className="mb-sm-0">
                      Milan Gbah{" "}
                      <small className="text-muted ml-3">
                        about 3 days ago
                      </small>
                    </h5>
                    <div className="media-reply__link">
                      <button className="btn btn-transparent p-0 mr-3">
                        <i className="fa fa-thumbs-up" />
                      </button>
                      <button className="btn btn-transparent p-0 mr-3">
                        <i className="fa fa-thumbs-down" />
                      </button>
                      <button className="btn btn-transparent text-dark font-weight-bold p-0 ml-2">
                        Reply
                      </button>
                    </div>
                  </div>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                    in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                  </p>
                  <ul>
                    <li className="d-inline-block">
                      <img
                        className="rounded"
                        width={60}
                        height={60}
                        src="images/blog/2.jpg"
                        alt=""
                      />
                    </li>
                    <li className="d-inline-block">
                      <img
                        className="rounded"
                        width={60}
                        height={60}
                        src="images/blog/3.jpg"
                        alt=""
                      />
                    </li>
                    <li className="d-inline-block">
                      <img
                        className="rounded"
                        width={60}
                        height={60}
                        src="images/blog/4.jpg"
                        alt=""
                      />
                    </li>
                    <li className="d-inline-block">
                      <img
                        className="rounded"
                        width={60}
                        height={60}
                        src="images/blog/1.jpg"
                        alt=""
                      />
                    </li>
                  </ul>
                  <div className="media mt-3">
                    <img
                      className="mr-3 circle-rounded circle-rounded"
                      src="images/avatar/4.jpg"
                      width={50}
                      height={50}
                      alt="Generic placeholder image"
                    />
                    <div className="media-body">
                      <div className="d-sm-flex justify-content-between mb-2">
                        <h5 className="mb-sm-0">
                          Milan Gbah{" "}
                          <small className="text-muted ml-3">
                            about 3 days ago
                          </small>
                        </h5>
                        <div className="media-reply__link">
                          <button className="btn btn-transparent p-0 mr-3">
                            <i className="fa fa-thumbs-up" />
                          </button>
                          <button className="btn btn-transparent p-0 mr-3">
                            <i className="fa fa-thumbs-down" />
                          </button>
                          <button className="btn btn-transparent p-0 ml-3 font-weight-bold">
                            Reply
                          </button>
                        </div>
                      </div>
                      <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus odio,
                        vestibulum in vulputate at, tempus viverra turpis. Fusce
                        condimentum nunc ac nisi vulputate fringilla. Donec
                        lacinia congue felis in faucibus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="media media-reply">
                <img
                  className="mr-3 circle-rounded"
                  src="images/avatar/2.jpg"
                  width={50}
                  height={50}
                  alt="Generic placeholder image"
                />
                <div className="media-body">
                  <div className="d-sm-flex justify-content-between mb-2">
                    <h5 className="mb-sm-0">
                      Milan Gbah{" "}
                      <small className="text-muted ml-3">
                        about 3 days ago
                      </small>
                    </h5>
                    <div className="media-reply__link">
                      <button className="btn btn-transparent p-0 mr-3">
                        <i className="fa fa-thumbs-up" />
                      </button>
                      <button className="btn btn-transparent p-0 mr-3">
                        <i className="fa fa-thumbs-down" />
                      </button>
                      <button className="btn btn-transparent p-0 ml-3 font-weight-bold">
                        Reply
                      </button>
                    </div>
                  </div>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                    in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                  </p>
                </div>
              </div>
              <div className="media media-reply">
                <img
                  className="mr-3 circle-rounded"
                  src="images/avatar/2.jpg"
                  width={50}
                  height={50}
                  alt="Generic placeholder image"
                />
                <div className="media-body">
                  <div className="d-sm-flex justify-content-between mb-2">
                    <h5 className="mb-sm-0">
                      Milan Gbah{" "}
                      <small className="text-muted ml-3">
                        about 3 days ago
                      </small>
                    </h5>
                    <div className="media-reply__link">
                      <button className="btn btn-transparent p-0 mr-3">
                        <i className="fa fa-thumbs-up" />
                      </button>
                      <button className="btn btn-transparent p-0 mr-3">
                        <i className="fa fa-thumbs-down" />
                      </button>
                      <button className="btn btn-transparent p-0 ml-3 font-weight-bold">
                        Reply
                      </button>
                    </div>
                  </div>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                    in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                  </p>
                </div>
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
export default Profile;