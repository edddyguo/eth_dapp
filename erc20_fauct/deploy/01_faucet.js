// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

const hre = require("hardhat");

module.exports = async ({getNamedAccounts, deployments}) => {

  const Lock = await hre.ethers.getContractFactory("Faucet");
  const lock = await Lock.deploy("0x5FbDB2315678afecb367f032d93F642f64180aa3",);

  await lock.deployed();

  console.log("Faucet address ", lock.address);
};
module.exports.tags = ['Faucet'];