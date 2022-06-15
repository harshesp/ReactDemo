import { Link, useNavigate } from 'react-router-dom'
import config from '../config/config';

function Dashboard(){
    return(
<div >
  {/***********************************
      Nav header start
  ************************************/}
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
  {/***********************************
      Nav header end
  ************************************/}
  {/***********************************
      Header start
  ************************************/}
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
          <div className="drop-down animated flipInX d-md-none">
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
              <span className="badge badge-pill gradient-1">3</span>
            </a>
            <div className="drop-down animated fadeIn dropdown-menu">
              <div className="dropdown-content-heading d-flex justify-content-between">
                <span className="">3 New Messages</span>
                <a href="javascript:void()" className="d-inline-block">
                  <span className="badge badge-pill gradient-1">3</span>
                </a>
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
              <span className="badge badge-pill gradient-2">3</span>
            </a>
            <div className="drop-down animated fadeIn dropdown-menu dropdown-notfication">
              <div className="dropdown-content-heading d-flex justify-content-between">
                <span className="">2 New Notifications</span>
                <a href="javascript:void()" className="d-inline-block">
                  <span className="badge badge-pill gradient-2">5</span>
                </a>
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
            <div className="drop-down dropdown-profile animated fadeIn dropdown-menu">
              <div className="dropdown-content-body">
                <ul>
                  <li>
                   {/* <a href="app-profile.html">
                      <i className="icon-user" /> <span>Profile</span>
</a> */}<Link to={`${config.baseUrl}profile`}><i className="icon-user" /> <span>Profile</span></Link>
                  </li>
                  <li>
                    <a href="javascript:void()">
                      <i className="icon-envelope-open" /> <span>Inbox</span>{" "}
                      <div className="badge gradient-3 badge-pill gradient-1">
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
                    </a> */}<Link to={`${config.baseUrl}`}><i className="icon-key" /> <span>Logout</span></Link>
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
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div className="card gradient-1">
            <div className="card-body">
              <h3 className="card-title text-white">Products Sold</h3>
              <div className="d-inline-block">
                <h2 className="text-white">4565</h2>
                <p className="text-white mb-0">Jan - March 2019</p>
              </div>
              <span className="float-right display-5 opacity-5">
                <i className="fa fa-shopping-cart" />
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="card gradient-2">
            <div className="card-body">
              <h3 className="card-title text-white">Net Profit</h3>
              <div className="d-inline-block">
                <h2 className="text-white">$ 8541</h2>
                <p className="text-white mb-0">Jan - March 2019</p>
              </div>
              <span className="float-right display-5 opacity-5">
                <i className="fa fa-money" />
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="card gradient-3">
            <div className="card-body">
              <h3 className="card-title text-white">New Customers</h3>
              <div className="d-inline-block">
                <h2 className="text-white">4565</h2>
                <p className="text-white mb-0">Jan - March 2019</p>
              </div>
              <span className="float-right display-5 opacity-5">
                <i className="fa fa-users" />
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="card gradient-4">
            <div className="card-body">
              <h3 className="card-title text-white">Customer Satisfaction</h3>
              <div className="d-inline-block">
                <h2 className="text-white">99%</h2>
                <p className="text-white mb-0">Jan - March 2019</p>
              </div>
              <span className="float-right display-5 opacity-5">
                <i className="fa fa-heart" />
              </span>
            </div>
          </div>
        </div>
      </div>
      
      
      
      
   
      
    </div>
    {/* #/ container */}
  </div>
  {/***********************************
      Content body end
  ************************************/}
  {/***********************************
      Footer start
  ************************************/}
 
  {/***********************************
      Footer end
  ************************************/}
</div>



);
}

export default Dashboard;