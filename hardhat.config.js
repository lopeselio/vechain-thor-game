require("@nomiclabs/hardhat-waffle");
require('@vechain.energy/hardhat-thor')

module.exports = {
  solidity: "0.8.4",
  networks: {
    vechain: {
      url: 'https://testnet.veblocks.net',
      privateKey: "0x689af8efa8c651a91ad287602527f3af2fe9f6501a7ac4b061667b5a93e037fd", // mention private key from hardhat node 
      delegateUrl: 'https://sponsor-testnet.vechain.energy/by/1',
      blockGasLimit: 10000000
    }
  }
};
