require("@nomiclabs/hardhat-waffle");
require('@vechain.energy/hardhat-thor')

module.exports = {
  solidity: "0.8.4",
  networks: {
    vechain: {
      url: 'https://testnet.veblocks.net',
      // privateKey: "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", // mention private key from hardhat node 
      // delegateUrl: 'https://sponsor-testnet.vechain.energy/by/104',
      privateKey: "0x80b97e2ecfab8b1c78100c418328e8a88624e3d19928ec791a8a51cdcf01f16f",
      delegateUrl: 'https://sponsor-testnet.vechain.energy/by/90',
      blockGasLimit: 10000000
    }
  }
};
