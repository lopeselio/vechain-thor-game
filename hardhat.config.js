require("@nomiclabs/hardhat-waffle");
require('@vechain.energy/hardhat-thor')

module.exports = {
  solidity: "0.8.4",
  networks: {
    vechain: {
      url: 'https://testnet.veblocks.net',
      privateKey: "0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e", // mention private key from hardhat node 
      delegateUrl: 'https://sponsor-testnet.vechain.energy/by/1',
      blockGasLimit: 10000000
    }
  }
};
