pragma solidity ^0.8.0;
contract UserRegister{

struct userInfo{
string first_name;
string last_name;
string email;
string password;
string confirm_password;
}

mapping(address => userInfo) public data;

address public Owner;

constructor(){
    Owner = msg.sender;
} 
modifier OnlyOwner{
    require(Owner == msg.sender,"Caller is not owner");
    _;
}

function getUserData(address user) public view returns(userInfo memory){
    return data[user];
}

function setUserData(address user,string memory first_name,string memory last_name,string memory email,string memory password,string memory confirm_password) public OnlyOwner{

data[user] = userInfo(first_name,last_name,email,password,confirm_password);

}

}