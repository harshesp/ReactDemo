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
import SimpleDateTime from 'react-simple-timestamp-to-date';
import "../Component/tablestyle.css";
import RegisterProductAbi from "./RegisterProduct.json";
import ESPABI from "./ESTABI.json";
import sakingEST from "./sakingEST.json";
import { messagePrefix } from '@ethersproject/hash';





function Dashboard() {
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
	const [checktable, setchecktable] = useState(false);
	const contractadd = "0x74C15d775310968670C86B75379852683fcbC0AE";
	const contractAddressreg = "0x241E7A11c841D8E8D17aE73f51a7DFFfD490A646";
	const [checkreg, setcheckreg] = useState(false);
	const [form, setForm] = useState({ title: "", desc: "", price: "" });
	const [buyid, setbuyeid] = useState("");
	const [stakedAmount, setStakedAmount] = useState(null);
	//const [approveAccount,setApproveAccount] = useState('');
	const [apporveValid, setAppoveValid] = useState({});
	//const [stakeAmount,setStakeAmount] = useState(null);
	const [totalReward, setTotalReward] = useState();
	const [clamReward, setClaimReward] = useState();
	const [stakeValue, setStakeValue] = useState();
	const [amounntValue, setAmaountValue] = useState();
	const [totalRewardErr, setTotalRewardErr] = useState("");
	var esptokencontract = "0x6f498DCa663f1347BAABf382697297b8f08096dF";
	var stakingContract = "0x40Bb19E0189A1ABB8c1047eE2fb73D3C6543f21d";






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
	const gettokenbalance = async (currentaccoount) => {
		const web3 = new Web3(window.ethereum);
		let contract = new web3.eth.Contract(ESPABI, esptokencontract);
		const tokanbal = await contract.methods.balanceOf(currentaccoount).call();
		settokenBalance(tokanbal / 10 ** 18);
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
					setbtn1('Send');
					toast.error('Transaction Failed');
					console.log(err);
				} else {
					setbtn1('Send');
					toast.success(`Transaction Successful ${transactionHash}`);
					// alert(transactionHash);
				}
			})
		}
	}
	function Validation() {
		let amounterr = '';
		let addresserr = '';
		if ((enterAamount === 0) || ((balance - enterAamount) <= 0) || ((tokenBalance - enterAamount) <= 0)) {
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
		let contract = new web3.eth.Contract(ESPABI, esptokencontract);
		let amount = web3.utils.toWei(enterAamount);

		const transactions = await contract.methods.transfer(enterAddress, amount).encodeABI();


		web3.eth.sendTransaction({
			from: currentaccoount,
			to: esptokencontract,
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
	
	

	async function SetUserData(e) {
		e.preventDefault();

		//const passadd="0x6Cef9130C88B75E7028CB048092D8cfFe865600e"
		const web3 = new Web3(window.ethereum);
		let contract = new web3.eth.Contract(mintregistrationAbi, contractadd);
		const setuserData = await contract.methods.setUserData(enterAddress, "kabs", "deo", "kabsdeo@gmail.com", "kabs123#", "kabs123#").send({ from: currentaccoount });
		console.log({ setuserData });
	}
	async function GetUserData(e) {
		e.preventDefault();

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
		fetch("https://api-rinkeby.etherscan.io/api?module=account&action=txlist&address=0x78D79B709C8A0b9D472730028604A2CF4Db141aA&startblock=0&endblock=99999999&page=1&offset=300&sort=desc&apikey=QT3K78XCA3HYQN57H6ZMBWT4QKQYYKGIMQ").then(res => res.json()).then(data => {
			console.log(data.result)
			setuser(data.result)

		});

	}


	async function registerProduct(e) {
		e.preventDefault();

		//console.log(form.price);
		let num = Number(form.price);
		//console.log(num);
		num = num * 10 ** 18;
		//console.log(num);
		let str = String(num);
		//console.log(str);
		const web3 = new Web3(window.ethereum);
		let contract = new web3.eth.Contract(RegisterProductAbi, contractAddressreg);
		console.log(str);

		//let SetProduct = await contract.methods.registerProduct(form.title, form.desc, '500000000000000').send({ from: currentaccoount });
		let SetProduct = await contract.methods.registerProduct(form.title, form.desc, str).send({ from: currentaccoount });

		console.log(SetProduct);


	}

	async function buyproduct(e) {
		e.preventDefault();


		const web3 = new Web3(window.ethereum);

		let contract = new web3.eth.Contract(RegisterProductAbi, contractAddressreg);

		let priceorg = await contract.methods.getProduct(buyid).call();

		console.log(priceorg);
		priceorg = priceorg / 10 ** 18;
		console.log(priceorg);
		let newpriceord = String(priceorg);
		console.log(newpriceord);
		let money = web3.utils.toWei(newpriceord, 'ether');

		console.log(money);

		let getproduct = await contract.methods.buy(buyid).send({ from: currentaccoount, value: money });

		console.log(getproduct);
	}



	async function delivery(e) {
		e.preventDefault();
		const web3 = new Web3(window.ethereum);



		let contract = new web3.eth.Contract(RegisterProductAbi, contractAddressreg);
		let delivered = await contract.methods.delivery(buyid).send({ from: currentaccoount });
		console.log(delivered);
	}



	const inputHandler = (e) => {
		const { name, value } = e.target

		setForm((old) => {
			return { ...old, [name]: value }
		})
	}

	function setregcheck() {
		setcheckreg(true);
	}

	async function setOnStaking(e) {
		e.preventDefault();

		const web3 = new Web3(window.ethereum);
		let contract = new web3.eth.Contract(sakingEST, stakingContract);
		const stake = await contract.methods.stake(stakedAmount).send({ from: currentaccoount });
		console.log(stake);
		const value = await contract.methods.showStakeValue().call();
		console.log(value);
		setStakeValue(value);
	}


	async function showReward(e) {
		e.preventDefault();

		
			const web3 = new Web3(window.ethereum);
			let contract = new web3.eth.Contract(sakingEST, stakingContract);
			const reward = await contract.methods.showTotalReward().call();
			console.log(reward);
			setTotalReward(reward);
			setTotalRewardErr("");
	}

	async function claimReward(e) {
		e.preventDefault();

		
		const web3 = new Web3(window.ethereum);
		let contract = new web3.eth.Contract(sakingEST, stakingContract);

		const claimedObj = await contract.methods.claimReward().send({ from: currentaccoount });
		console.log(claimedObj);
		const msgs = await contract.methods.showClaimReward_msg().call();
		setClaimReward(msgs);

	}

	async function claimAmount(e) {
		e.preventDefault();
       
		const web3 = new Web3(window.ethereum);
		let contract = new web3.eth.Contract(sakingEST, stakingContract);
		const cliamed = await contract.methods.claimAmount().send({ from: currentaccoount });
		console.log(cliamed);
		const msgs = await contract.methods.shoeClaimAmount_msg().call();
		console.log(msgs);
		setAmaountValue(msgs);

	}

	return (
		<div >
			<Navbar />
			<Headers />
			<Sidebar />
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
							<h4>balance : {tokenBalance}</h4>
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






					<div className='row'>
						<div className='col-md-12'>
							<div className='col-md-6'>
								<form>

									<div className='form-group'>
										<label>Set Amount on Staking after appove</label><br />
										<input type="number" name="approve_amount" value={stakedAmount} onChange={e => setStakedAmount(e.target.value)} placeholder="Amount to approve" /><br />
										<button onClick={setOnStaking} className='btn btn-info'>STAKE</button>
									</div>


								</form>
							</div></div></div>


					<div className='row'>
						<div className='col-md-12'>
							<div className='col-md-6'>
								<form>

									<div className='form-group'>
										<label>Show How much reward you got till now</label><br />
										<button onClick={showReward} className='btn btn-info'>Show</button>
										<div>
											<span className="validationError">{totalReward}</span>
											<span className="validationError">{totalRewardErr}</span>

										</div>
									</div>


								</form>
							</div></div></div>

					<div className='row'>
						<div className='col-md-12'>
							<div className='col-md-6'>
								<form>

									<div className='form-group'>
										<label>Claim reward you got till now</label><br />
										<button onClick={claimReward} className='btn btn-info'>Claim</button>
										<div><span className="validationError">{clamReward}</span></div>
									</div>


								</form>
							</div></div></div>

					<div className='row'>
						<div className='col-md-12'>
							<div className='col-md-6'>
								<form>

									<div className='form-group'>
										<label>Withdraw whole Amount</label><br />
										<button onClick={claimAmount} className='btn btn-info'>Withdraw</button>
										<div><span className="validationError">{amounntValue}</span>
										</div>
									</div>


								</form>
							</div></div></div>

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
					{!checktable ? <div></div>
						: <div style={{ height: '180px', width: '1000px', overflow: 'auto' }} className='fixTableHead'>
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

									user.map(item => (
										<tr><td>{item.blockNumber}</td>
											<td>{item.hash}</td>
											<td>{item.from}</td>
											<td>{item.to}</td>
											<td>{item.value / 10 ** 18}</td>
											<td><SimpleDateTime dateSeparator="/" timeSeparator="-" format="YMD">{item.timeStamp}</SimpleDateTime></td></tr>
									))
								}

							</table>
						</div>}


					<div>
						<button className="btn btn-primary px-3 ml-4" onClick={setregcheck}>Register Product</button>
						<div className="login-form-bg h-100">
							<form >{!checkreg ?
								<div></div>
								:
								<div className="form-group">
									<label>Enter Title </label>
									<input type="text" placeholder="title" name="title" onChange={inputHandler} /><br />
									<label>Enter description </label>
									<input type="text" placeholder="description" name="desc" onChange={inputHandler} /><br />
									<label>Enter price in terms of 0.000X </label>
									<input type="text" placeholder="price" name="price" onChange={inputHandler} />
								</div>
							}</form></div>
						<button className="btn btn-primary px-3 ml-4" onClick={registerProduct}>AddProduct</button>
					</div>
					{/* */}
					<div>

						<input type="number" placeholder='product_id' onChange={(e) => setbuyeid(e.target.value)} />
						<button className="btn btn-primary px-3 ml-4" onClick={buyproduct}>Buy Product</button>
					</div>
					<div>
						<button className="btn btn-primary px-3 ml-4" onClick={delivery}>Delivered???</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;