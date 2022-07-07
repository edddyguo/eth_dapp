// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;
import "hardhat/console.sol";

contract ExampleExternalContract {

  bool public completed;

  function complete() public payable {
    console.log("call complete______________ ");
    completed = true;
  }

}