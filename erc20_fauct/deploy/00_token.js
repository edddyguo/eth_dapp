// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

const hre = require("hardhat");

module.exports = async ({getNamedAccounts, deployments}) => {
  const lockedAmount = hre.ethers.utils.parseEther("0.0");

  const Lock = await hre.ethers.getContractFactory("ERC20");
  const lock = await Lock.deploy("Test_N","Test_S",{ value: lockedAmount });

  await lock.deployed();

  console.log("Token deployed to:", lock.address);
};
module.exports.tags = ['ERC20'];