import { Link, useNavigate } from 'react-router-dom'
import config from '../config/config';
import Hearder from '../directives/header';

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
 { <Hearder/>}
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