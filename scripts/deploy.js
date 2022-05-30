// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  await hre.run('compile');

  // We get the contract to deploy
  // const NFTMarket = await hre.thor.getContractFactory("NFTMarket");
  // const nftMarket = await NFTMarket.deploy();

  // await nftMarket.deployed()
  // console.log("Nft market deployed to:", nftMarket.address);


  // const NFT = await hre.thor.getContractFactory("NFT");
  // const nft = await NFT.deploy(nftMarket.address);

  // await nft.deployed()

  // console.log("Nft deployed to:", nft.address);

  // const DungeonToken = await hre.thor.getContractFactory("DungeonToken");
  // const dungeontoken = await DungeonToken.deploy();

  // await dungeontoken.deployed()

  // console.log("DungeonToken deployed to:", dungeontoken.address);



  const Gold = await hre.thor.getContractFactory("Gold");
  const gold = await Gold.deploy();

  await gold.deployed()

  console.log("Gold deployed to:", gold.address);



  // const Gameplay = await hre.thor.getContractFactory("Gameplay");
  // const gameplay = await Gameplay.deploy();

  // await gameplay.deployed()

  // console.log("DungeonToken deployed to:", gameplay.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
