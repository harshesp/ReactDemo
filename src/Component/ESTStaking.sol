// SPDX-License-Identifier: GPL-3.8
pragma solidity 0.8.7;



interface ERC20_STD 
 {

    function name() external view returns (string memory);
function symbol() external view  returns (string memory);
function decimals() external view  returns (uint8);
function totalSupply() external view   returns (uint256);
function balanceOf(address _owner) external view returns (uint256 balance);
function transfer(address _to, uint256 _value) external returns (bool success);
function transferFrom(address _from, address _to, uint256 _value) external returns (bool success);
function approve(address _spender, uint256 _value) external returns (bool success);

function allowance(address _owner, address _spender) external view  returns (uint256 remaining);

// event Transfer(address indexed _from, address indexed _to, uint256 _value);
// event Approval(address indexed _owner, address indexed _spender, uint256 _value);
    }

contract Ownership //2nd contract to set contract owner
    {
 
     address public contractOwner;
     address public newOwner;

     event TransferOwnership(address indexed _from,address indexed _to);

     constructor() {
         contractOwner = msg.sender;
     }

     function changeOwner(address _to) public {
         require(msg.sender == contractOwner,"Only owner of contract can change owner");
         newOwner= _to;
     }

     function acceptowner() public{
    
    require(msg.sender == newOwner,"only new owne can accept");
    contractOwner = newOwner;
    emit TransferOwnership(contractOwner,newOwner);
    newOwner = address(0);
     }

    }

contract Staking is Ownership //to define function of abstract contract
{

   ERC20_STD ESTtoken = ERC20_STD(0xd9145CCE52D386f254917e481eB44e9943F39138);
   uint public staking_time;
   uint public total_reward;
   uint public count=0;
   uint public latest_time;
   uint public staked_value;

   constructor(){

   }

     function getCurrentTokenName() view public returns(string memory){
        return ESTtoken.name();
    }
    

        function getCurrentTokenSymbol() view public returns(string memory){
        return ESTtoken.symbol();
    }

        function getCurrentTokenDecimal() view public returns(uint){
        return ESTtoken.decimals();
    }

      function getCurrentTokenTotalSupply() view public returns(uint){
        return ESTtoken.totalSupply();
    }

       function getBalance(address _user) view  public returns(uint256){
        
                return ESTtoken.balanceOf(_user);

    }

       function giveUsApproval(address _us,uint _value) public returns (bool) {
           require(ESTtoken.balanceOf(msg.sender)>= _value,"insuffcient tokens please provide valide amount");
           ESTtoken.approve(_us,_value);
           return true;
       }


      function checkHowMuchWeHaveApprovalFromYourSide() view public returns (uint256){
         return ESTtoken.allowance(msg.sender,address(this));
      }

      function stake(uint256 token_value) public returns (bool){
          require(ESTtoken.allowance(msg.sender,address(this))>=token_value,"insufficient allowace for staking");
          require(ESTtoken.balanceOf(msg.sender)>=token_value,"insufficient balance for staking");
          ESTtoken.transferFrom(msg.sender,address(this),token_value); 
          staking_time = block.timestamp;
          latest_time = staking_time;
          staked_value = token_value;
          return true;
          

      }

      function showTotalReward()  public returns(uint){
       
          uint current_time = block.timestamp;
          uint total_time = current_time - latest_time;
          uint completed_time = latest_time - staking_time;
          uint remaining_time;
          if(completed_time>=1800){
            remaining_time=1800;//max time
          }else{
            remaining_time=1800 - completed_time;
          }
         if(total_time <= remaining_time ){
       uint percent = staked_value*2/100;
       total_reward = percent*total_time/180;
       return total_reward;
       }else if(count==0){
         total_time = remaining_time;
         uint percent = staked_value*2/100;
       total_reward = percent*total_time;
       return total_reward;
       count = 1;
       }
      }

      function claimReward(uint _value) public returns ( uint ){
        total_reward-=_value;
         ESTtoken.transfer(msg.sender,_value);
         latest_time=block.timestamp;

      }
    //   function getThisAdd() public view returns (address){
    //       return address(this);
    //   }
    //   function getMagAdd() public view returns (address){
    //       return msg.sender;
    //   }

}
