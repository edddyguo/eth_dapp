const {ethers, upgrades, network} = require("hardhat");
const {expect} = require('chai')
const {defaultHardhatNetworkHdAccountsConfigParams} = require("hardhat/internal/core/config/default-config");
const {getAccountPath} = require("ethers/lib/utils");
const {networks} = require("../..//hardhat.config");


async function main() {
  //peth
  //let account1 = "0x613548d151E096131ece320542d19893C4B8c901"
  let account2 = "0x37BA121cdE7a0e24e483364185E80ceF655346DD"
  let account3 = "0xca9B361934fc7A7b07814D34423d665268111726"
  let account4 = "0xF668b864756a2fB53b679bb13e0F9AB2d9C5fEE0"
  let account_tj = "0x0085560b24769dAC4ed057F1B2ae40746AA9aAb6"


  let signer = await ethers.getSigners();
  //let account1 = signer[0].address;
  //let chemix_signer = signer[0];
  let account1 = signer[0].address;
  let chemix_signer = signer[0];
  //let receiver = signer[1].address;
  let receiver = account_tj;
  let receiver_signer = signer[1];

  const issueAmountDefault = BigInt(100_000_000_000_000_000_000_000_000_000) //100_000_000_000
  const options = {gasPrice: 100000000000, gasLimit: 2950000, value: 0};

  //new object
  const nft = await ethers.getContractAt("SimpleNFT", '0xAB1415967609bE6654a8e1FEDa209275DB1f5B9c', chemix_signer)

  //get symbol
  let symbol = await nft.symbol(options);
  console.log('NFT name', symbol);

  //get balance
  let balance1 = await nft.balanceOf(account1, options);
  console.log('balance1', balance1);

  //mint
  console.log('start mint');
  await nft.mintNFT(account1, "https://gateway.filedrive.io/ipfs/QmRMdKjxmsqhwEZTJaaRjT9G86ZtjXGreiQFgNC5VQSL1Q");
  console.log('finish mint');

  //get balance
  let balance2 = await nft.balanceOf(account1, options);
  console.log('balance2 ', balance2);
}

main();
