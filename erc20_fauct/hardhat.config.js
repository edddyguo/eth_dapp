require("@nomicfoundation/hardhat-toolbox");
require('hardhat-deploy');
require("@nomiclabs/hardhat-ethers")

const defaultNetwork = "hardhat";
real_accounts = undefined;
if(process.env.DEPLOYER_KEY && process.env.OWNER_KEY) {
  real_accounts = [process.env.DEPLOYER_KEY, process.env.OWNER_KEY];
}
const infrua_eth_url = process.env.INFRUA_ETH_URL;
const infrua_ipfs_url = process.env.INFRUA_IPFS_URL;
const etherscan_api_key = process.env.ETHERSCAN_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  defaultNetwork,
  networks: {
    hardhat: {
      // Required for real DNS record tests
      initialDate: "2019-03-15T14:06:45.000+13:00",
      saveDeployments: false,
      tags: ["test", "legacy", "use_root"],
    },
    rinkeby: {
      url: infrua_eth_url, // <---- YOUR INFURA ID! (or it won't work)
      accounts: real_accounts
    },
    local: {
      url: 'http://127.0.0.1:8545', //本地RPC地址
      //本地区块链账户地址(需要启动运行npx hardhat node命令开启本地开发环境的区块链)
      //这些账户地址和秘钥每次重启区块链都是相同的,并且数据会重置
      accounts: real_accounts
    },
    peth: {
      url: 'http://18.176.211.246:9545', //本地RPC地址
      //url: 'http://192.168.1.158:8548', //本地RPC地址
      //本地区块链账户地址(需要启动运行npx hardhat node命令开启本地开发环境的区块链)
      //这些账户地址和秘钥每次重启区块链都是相同的,并且数据会重置
      accounts: real_accounts
    }
  },
  etherscan: {
    // your api key here.
    apiKey: etherscan_api_key,
  },
};