
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Web3 from '/node_modules/web3/dist/web3.min.js';
import { Link } from 'react-router-dom';
import config from '../config/config';
import Headers from '../directives/header';
import Navbar from "../directives/navbar";
import Sidebar from "../directives/sidebar";
import Cookies from 'js-cookie';
import RegisterProductAbi from "./RegisterProduct.json";


function Profile() {
  const [checkreg,setcheckreg] = useState(false);
  const [value,setvalue] = useState();
  const [form, setForm] = useState({ title: "", desc: "", price: ""});
  const contractAddress= "0xe185F035C4f5A35A0D5EFA65e9EdF34ebe1Df06F";
  const sellerAddress = "0x78D79B709C8A0b9D472730028604A2CF4Db141aA";//account1
  const buyerAddress = "0x6Cef9130C88B75E7028CB048092D8cfFe865600e";//account2

 async function registerProduct(e){
e.preventDefault();
setcheckreg(false);
const web3 = new Web3(window.ethereum);
		let contract = new web3.eth.Contract(RegisterProductAbi, contractAddress);
   let SetProduct = await contract.methods.registerProduct("mobile", "vivo" ,1).send({from: sellerAddress});
console.log(SetProduct);
 }

 async function buyproduct(e){
  e.preventDefault();
  
  const web3 = new Web3(window.ethereum);
      let contract = new web3.eth.Contract(RegisterProductAbi, contractAddress);
     let getproduct = await contract.methods.buy(1).send({from: buyerAddress});
  console.log(getproduct);
   }


 const inputHandler = (e) => {
  const { name, value } = e.target
  
  setForm((old) => {
      return { ...old, [name]: value }
  })
}


  return (
    <div >

      <Navbar />
      <Headers />
      {/***********************************
      Header end ti-comment-alt
  ************************************/}

      {/***********************************
      Content body start
  ************************************/}
      <Sidebar />
      <div className="content-body">

        {/* row */}
        <div className="container-fluid">
         
              <div>
                <Link to={`${config.baseUrl}editprofile`}><button className="btn btn-primary px-3 ml-4">Edit Profile</button></Link>
              </div>
              <div>
                <button className="btn btn-primary px-3 ml-4" onClick={registerProduct}>Register Product</button>
              </div>
              {/* <div><input type="text" placeholder="title" onChange={inputHandler}/>
              <input type="text" placeholder="description" onChange={inputHandler}/>
              <input type="text" placeholder="price"  onChange={inputHandler}/></div> */}
              <div>
                <button className="btn btn-primary px-3 ml-4" onClick={buyproduct}>Buy Product</button>
              </div>
              
      </div>        
    </div>
    </div>

  );
}
export default Profile;