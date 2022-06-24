import config from '../config/config';
import Headers from '../directives/header';
import Navbar from "../directives/navbar";
import Sidebar from '../directives/sidebar';
import Cookies from 'js-cookie';
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Web3 from '/node_modules/web3/dist/web3.min.js';
import mintAbi from './TokentransactionAbi.json';
import mintregistrationAbi from './UserRegistration.json';
import SimpleDateTime  from 'react-simple-timestamp-to-date';
import "../Component/tablestyle.css"




function Dashboard(props) {
	const contractAddress = "0x598Ee1dA1967682C37Dd7EFBAAa66073562F0a1b";
	const [currentaccoount, setcurrentaccoount] = useState(null);
	const [balance, setbalance] = useState(null);
	const [check, setcheck] = useState(false);
	const [enterAamount, setenterAamount] = useState(null);
	const [enterAddress, setenterAddress] = useState('');
	const [valid, setvalid] = useState({});
	const [btn, setbtn] = useState('Send');
	const [btn1, setbtn1] = useState('Send Token');
	const [tokenBalance, settokenBalance] = useState(null);
	const [getuserdata, setgetuserdata] = useState({});
	const [user, setuser] = useState([]);
	const [checktable,setchecktable] = useState(false);



	useEffect(() => {

		if (window.ethereum) {
			checkWallet();
		}
	}, []);
	const checkWallet = async () => {

		const web3 = new Web3(window.ethereum);
		const useraccount = await web3.eth.getAccounts();
		const account = useraccount[0];
		if (account) {
			setcurrentaccoount(account);

			let etherBalance = await web3.eth.getBalance(account);
			etherBalance = web3.utils.fromWei(etherBalance, 'ether');

			setbalance(etherBalance);
			gettokenbalance(account);
			setcheck(true);
		}

		
	}
	const gettokenbalance = async () => {
		const web3 = new Web3(window.ethereum);
		let contract = new web3.eth.Contract(mintAbi, contractAddress);
		const tokanbal = await contract.methods.balanceOf(currentaccoount).call();
		settokenBalance(tokanbal / 10 ** 8);
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
			const web3 = new Web3(currentprovider);

			const useraccount = await web3.eth.getAccounts();
			const account = useraccount[0];

			setcurrentaccoount(account);

			setcheck(true);


			let etherBalance = await web3.eth.getBalance(account);
			etherBalance = web3.utils.fromWei(etherBalance, 'ether');

			setbalance(etherBalance);
			// props.Dashboard();
		}

	};

	function Send(e) {
		e.preventDefault();
		let isValid = Validation();
		if (!isValid) {
			alert("false");
		} else {
			const web3 = new Web3(window.ethereum);

			web3.eth.sendTransaction({
				from: currentaccoount, to: enterAddress, value: web3.utils.toWei(enterAamount, 'ether'),
			}, function (err, transactionHash) {
				if (err) {
					setbtn('Send');
					toast.error('Transaction Failed');
					console.log(err);
				} else {
					setbtn('Send');
					toast.success(`Transaction Successful ${transactionHash}`);
					// alert(transactionHash);
				}
			})
		}
	}
	function Validation() {
		let amounterr = '';
		let addresserr = '';
		if ((enterAamount === 0) || ((balance - enterAamount) <= 0)) {
			amounterr = "Please Provide valid Amount";
		}
		if ((enterAddress === '') || ((enterAddress.length) < 42)) {
			addresserr = "Please Provide valid Address";
		}
		if (amounterr || addresserr) {
			setvalid({ amounterr, addresserr });
			return false;
		} else {
			setbtn('Processing...');
			return true;
		}


	}

	async function Send1(e) {
		e.preventDefault();


		const web3 = new Web3(window.ethereum);
		let contract = new web3.eth.Contract(mintAbi, contractAddress);


		const transactions = await contract.methods.transfer(enterAddress, enterAamount).encodeABI();

		let isValid = Validation();
		if (!isValid) {
			alert("false");
		} else {
			web3.eth.sendTransaction({
				from: currentaccoount,
				to: contractAddress,
				data: transactions,
			}, function (err, transactionHash) {
				if (err) {
					setbtn('Send');
					toast.error('Transaction Failed');
					console.log(err);
				} else {
					setbtn('Send');
					toast.success(`Transaction Successful ${transactionHash}`);
					// alert(transactionHash);
				}
			})
		}
	}


	async function SetUserData(e) {
		e.preventDefault();
		const contractadd = "0x3B04B6c57256b3BdE739B94CA6dC6594a258E1EB";
		//const passadd="0x6Cef9130C88B75E7028CB048092D8cfFe865600e"
		const web3 = new Web3(window.ethereum);
		let contract = new web3.eth.Contract(mintregistrationAbi, contractadd);
		const setuserData = await contract.methods.setUserData(enterAddress, "kabs", "deo", "kabsdeo@gmail.com", "kabs123#", "kabs123#").send({ from: currentaccoount });
		console.log({ setuserData });
	}
	async function GetUserData(e) {
		e.preventDefault();
		const contractadd = "0x3B04B6c57256b3BdE739B94CA6dC6594a258E1EB";
		//const passadd="0x6Cef9130C88B75E7028CB048092D8cfFe865600e"
		const web3 = new Web3(window.ethereum);
		let contract = new web3.eth.Contract(mintregistrationAbi, contractadd);
		const getData = await contract.methods.getUserData(enterAddress).call();
		console.log({ getData });
		setgetuserdata(getData);
	}
	// useEffect(()=>{fetch("https://api-rinkeby.etherscan.io/api?module=account&action=txlist&address=0x78D79B709C8A0b9D472730028604A2CF4Db141aA&startblock=0&endblock=99999999&page=1&offset=300&sort=asc&apikey=QT3K78XCA3HYQN57H6ZMBWT4QKQYYKGIMQ").then(res => res.json()).then(data => {
	// 	console.log(data.result)
	// 	setuser(data.result)

	// });},[])
	function ShowTransaction() {
		setchecktable(true);
		fetch("https://api-rinkeby.etherscan.io/api?module=account&action=txlist&address=0x78D79B709C8A0b9D472730028604A2CF4Db141aA&startblock=0&endblock=99999999&page=1&offset=300&sort=asc&apikey=QT3K78XCA3HYQN57H6ZMBWT4QKQYYKGIMQ").then(res => res.json()).then(data => {
			console.log(data.result)
			setuser(data.result)
	
		});
		
	}
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


			<ToastContainer />
			<div className="content-body">

				<div className="container-fluid mt-3">
					{!check ?
						<div>
							<h3>Please connect your wallet</h3>
							<button className='btn mb-1 btn-outline-primary' onClick={connectWallet}> wallet connect</button>
						</div>
						:
						<div><div>
							<h4>account : {currentaccoount}</h4>
							<h4>balance : {balance}</h4>
							<h4>balance : {tokenBalance / 10 ** 10}</h4>
						</div>

							<div className='row'>
								<div className='col-md-12'>
									<div className='col-md-6'>
										<form>
											<div className='form-group'>
												<label>Enter Amount</label>
												<input type="number" name="enterAamount" value={enterAamount} className="form-control" onChange={e => setenterAamount(e.target.value)} />
												<span className="validationError">{valid.amounterr}</span>
											</div>


											<div className='form-group'>
												<label>Enter Address</label>
												<input type="text" name="enterAddress" value={enterAddress} className="form-control" onChange={e => setenterAddress(e.target.value)} />
												<span className="validationError">{valid.addresserr}</span>

											</div>


											<div className='form-group'>
												<button className='btn btn-info' onClick={Send} >{btn}</button>
											</div>
											<div className='form-group'>
												<button className='btn btn-info' onClick={Send1} >{btn1}</button>
											</div>
										</form>
									</div>
								</div>

							</div>

						</div>



					}



				</div>

				<div>
					<h3>SET DATA</h3>
					<button class="btn mb-1 btn-flat btn-success" onClick={SetUserData}> set data</button>
				</div>
				<div>
					<h3>GET DATA</h3>
					<button class="btn mb-1 btn-flat btn-success" onClick={GetUserData}> get data</button><br />
					<span>first name:  {getuserdata.first_name}</span><br />
					<span>last name:  {getuserdata.last_name}</span><br />
					<span>email:   {getuserdata.email}</span><br />
				</div>
				<div>
					<h3>Show transactions</h3>
					<button className='btn mb-1 btn-outline-primary' onClick={ShowTransaction}>Transaction</button>
				</div>
				{!checktable?<div></div>
				:<div  style={{height:'180px',width:'1000px',overflow:'auto'}} className='fixTableHead'>
					<table border='1' className='fixTableHead thead th'>
					<thead>
					<tr ><th>BlockNumber</th>
					    <th >hash</th>
						<th >from</th>
						<th >to</th>
						<th >value</th>
						<th >timeStamp</th></tr>
					</thead>
					{
					
					user.map(item =>(
					<tr><td>{item.blockNumber}</td>
					    <td>{item.hash}</td>
						<td>{item.from}</td>
						<td>{item.to}</td>
						<td>{item.value/10**18}</td>
						<td>{Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(item.timestamp)}</td></tr>))
					}
					
					</table>
				</div>}

			</div>

		</div>
	);
}

export default Dashboard;