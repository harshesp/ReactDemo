import config from '../config/config';
import Headers from '../directives/header';
import Navbar from "../directives/navbar";
import Sidebar from '../directives/sidebar';
import Cookies from 'js-cookie';
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";

import Web3 from '/node_modules/web3/dist/web3.min.js';

function Dashboard(props) {

	const [currentaccoount, setcurrentaccoount] = useState(null);
	const [balance,setbalance] = useState(null);
	const [check,setcheck] = useState(false);
	const [enterAamount,setenterAamount] = useState(0);
	const [enterAddress,setenterAddress] = useState('');

	
	useEffect(()=>{

		if (window.ethereum) {
			checkWallet();
		}
	},[]);
	const checkWallet = async() =>{

		const web3 =new Web3(window.ethereum);
		const useraccount = await web3.eth.getAccounts();
		const account=useraccount[0];
		if(account){
		setcurrentaccoount(account);
		setcheck(true);
		}
	}
	
	const detectCurrentProvider = () => {
		let provider;

		if (window.web3) {
			provider = window.web3.currentProvider;
			console.log("web3 connected")
		} else {
			console.log(
				'Non-Ethereum browser detected. You should consider trying MetaMask!'
			);
		}

		return provider;
	};

	const connectWallet = async () => {
		const currentprovider = detectCurrentProvider();
		if (currentprovider) {
			if (currentprovider !== window.ethereum) {
				alert("not window ethereum")
			} await currentprovider.request({ method: "eth_requestAccounts" })
			const web3 =new Web3(currentprovider);
			
			const useraccount = await web3.eth.getAccounts();
			const account=useraccount[0];
			
			setcurrentaccoount(account);
			setcheck(true);
			

			let etherBalance= await web3.eth.getBalance(account);
			etherBalance= web3.utils.fromWei(etherBalance,'ether');
			setbalance(etherBalance);
			// props.Dashboard();
		}


	};

	return (
		<div >
			<Navbar />
			<Headers />
			<Sidebar />
			{/* <div className="content-body">
				<div className="container-fluid mt-3">
				<button className='className="btn mb-1 btn-outline-primary' onClick={checking}>ckick here</button>
				</div>
			</div> */}
			

			
			<div className="content-body">
				<div className="container-fluid mt-3">
				{!check ?
					<div>
						<h3>Please connect your wallet</h3>
						<button className='btn mb-1 btn-outline-primary' onClick={connectWallet}> wallet connect</button>
					</div>
					:
					<div>
						<h4>account : {currentaccoount}</h4>
						<h4>balance : {balance}</h4>

						<div className='row'>
							<div className='col-md-12'>
								<div className='col-md-6'>
									<div className='form-group'>
										<label>Enter Amount</label>
										<input type="number" value={enterAamount} className="form-control" />
									</div>


									<div className='form-group'>
										<label>Enter Address</label>
										<input type="text" value={enterAddress} className="form-control" />
									</div>


									<div className='form-group'>
										<button className='btn btn-info' >Send</button>
									</div>
								</div>
							</div>

						</div>

					</div>



				}

					
				</div>
			</div>
		




		</div>
	);
}

export default Dashboard;