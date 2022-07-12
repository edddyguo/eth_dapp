require("@nomicfoundation/hardhat-toolbox");
require('hardhat-deploy');
require("@nomiclabs/hardhat-ethers")


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/ec6a8acd1d354717acec099ad46a0bab", // <---- YOUR INFURA ID! (or it won't work)
      accounts: [
        // 0x613548d151E096131ece320542d19893C4B8c901 chemix-test1
        '0xa26660eb5dfaa144ae6da222068de3a865ffe33999604d45bd0167ff1f4e2882',
        // 0x37BA121cdE7a0e24e483364185E80ceF655346DD chemix-test2
        '0xb89da4744ef5efd626df7c557b32f139cdf42414056447bba627d0de76e84c43',
      ]
    },
    local: {
      url: 'http://127.0.0.1:8545', //本地RPC地址
      //本地区块链账户地址(需要启动运行npx hardhat node命令开启本地开发环境的区块链)
      //这些账户地址和秘钥每次重启区块链都是相同的,并且数据会重置
      accounts: [
        // 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 (第一个账户地址及秘钥)
        '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
        // 0x70997970c51812dc3a010c7d01b50e0d17dc79c8 (第二个账户地址及秘钥)
        '0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d',
        // 0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc (三个账户地址及秘钥)
        '0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a',
        // 0x90f79bf6eb2c4f870365e785982e1f101e93b906 (第四个个账户地址及秘钥)
        '0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6',
        // 0x15d34aaf54267db7d7c367839aaf71a00a2c6a65 (第五个账户地址及秘钥)
        '0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a',
      ]
    },
    peth: {
      url: 'http://18.176.211.246:9545', //本地RPC地址
      //url: 'http://192.168.1.158:8548', //本地RPC地址
      //本地区块链账户地址(需要启动运行npx hardhat node命令开启本地开发环境的区块链)
      //这些账户地址和秘钥每次重启区块链都是相同的,并且数据会重置
      accounts: [
        // 0x613548d151E096131ece320542d19893C4B8c901 chemix-test1
        '0xa26660eb5dfaa144ae6da222068de3a865ffe33999604d45bd0167ff1f4e2882',
        //'0x1f3bc7d273c179f0b73745d0599a15ece081837a9aa4ccb6351842fcad19fb95',
        // 0x37BA121cdE7a0e24e483364185E80ceF655346DD chemix-test2
        '0xb89da4744ef5efd626df7c557b32f139cdf42414056447bba627d0de76e84c43',
        // 0xca9B361934fc7A7b07814D34423d665268111726 chemix-test3
        '0xb0a09e85dad814ccc7231982401cca5accc3a46bc68349b403a7a129517cc266',
        //0xF668b864756a2fB53b679bb13e0F9AB2d9C5fEE0  chemix-test4
        '3bf8a9797398ee2dcdd550bad07b73c41a9af7c94be3aa97cdebde8c0efef00b'
      ]
    }
  },
  etherscan: {
    // your api key here.
    apiKey: "PSW8C433Q667DVEX5BCRMGNAH9FSGFZ7Q8",
  },
};