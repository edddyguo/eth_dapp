// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "hardhat/console.sol";

contract ExampleExternalContract {

    bool public completed;
    address public owner = 0x613548d151E096131ece320542d19893C4B8c901;

    function complete() public payable {
        console.log("call complete______________ ");
        completed = true;
    }

    function withdraw() public {
        require(msg.sender == owner, "Only owner can withdraw");
        (bool sent,) = msg.sender.call{value: address(this).balance}("");
        require(sent, "Failed to send user balance back to the owner");
    }

}
