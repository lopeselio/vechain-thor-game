# Vechain-Thor RPG Quest
<center><img width="267" alt="Screenshot 2022-05-30 at 7 36 17 PM" src="https://user-images.githubusercontent.com/43913734/171017384-f82ea077-605d-40a0-8c54-633ec9754d3d.png"><center>

An RPG dungeon game wherein the player has to encounter and fight monsters who are guarding chests, and gain loot from the chests in the form of ERC-20 equivalent VIP-180 $DGN (in-game) token (Dungeon Token), deployed on Vechain-Thor Testnet.

The player has to finally unlock the locked gates by seeking the keys to the token-gate who is locked inside a wall in the dungeon, and ultimately defeat the the ultimate evil angel who possesses the final key to the Vechain NFT (VIP-190) token. Once the user collect the Vechain NFT collectible, an NFT is minted to your NFT-Trophy Gallery(to be implemented).

# Plans for the future
1. To have an in-game DEX, to allow users to swap other tokens on Vechain to DGN token, in order to buy various assets and collectibles in-game.
2. In game marketplace to allow users to buy and sell NFT characters and game potions and equip the same in further levels.
3. 1v1 gameplay between two warriors by staking tokens and fighting for the stake
4. Ability to craft Rare NFTs and equip them, by on-chain XP (on-chain reputation), that is attained while playing the levels.
5. Genesis NFT minting event through a mystery box sale, based on character rarity.

**The VeChainThor blockchain currently already has the VeChain Multi-Party Payment Protocol (MPP). Using MPP a user can interact with a smart contract, while the smart contract pays for the transaction fee using a delegator service uinquely developed on Vechain Thor, making use of the dApp for the end-user completely free.**

# Tools and Tech Stack
- The game is built on Phaser.
- The app is built in React
- Smart contracts are written in solidity since VeChain Thor is an EVM compatible blockchain network.
- We use HardHat Thor package developed by Vechain-Energy, to deploy our smart contracts to `https://testnet.veblocks.net` using a wallet whitelisted on Vechain Energy Sponsorships Dashboard at `https://sponsor-testnet.vechain.energy/by/105`
- Other packages used include [web3 providers connex](https://github.com/zzGHzz/web3-providers-connex), implemented using Connex JS and Thor RestFUL APIs, vechain ethers and many more, used to interact with the smart contract ABI while emitting in-game events.
Vechain Thor Blockchain provides the perfect platform to build games due to its scalability and robust infrastructure, and moreover low gas fees which are paid using VTHO tokens.
- Sync2 Wallet to sign transactions on Vechain and return responses to the NodeJS dApp.

## Contract Addresses of the game:

- Token Address Dungeon Token $DGN: `0xEf31C7D024dee36E4757D26e0D073E1e2964EdD1` View here: [Vechain Explorer on Testnet](https://explore-testnet.vechain.org/accounts/0xef31c7d024dee36e4757d26e0d073e1e2964edd1/)
  <img width="1440" alt="image" src="https://user-images.githubusercontent.com/43913734/171018311-1db8da48-a052-42e5-a643-bb2fb103a8f3.png">

  In game transactions along with contract Clauses for the trasnactions, can be viewed on the explorer
<p><img width="1440" alt="image" src="https://user-images.githubusercontent.com/43913734/171018474-10ca07ac-d870-48a6-aec7-ed053095e28a.png">
  <img width="1440" alt="image" src="https://user-images.githubusercontent.com/43913734/171018693-1337c046-2b03-48a6-960e-95e029738a95.png"></p>


**The clauses associated with this contract call can be viewed in the clauses** here on [https://explore-testnet.vechain.org/transactions/0x08d6e07a5edde04843a5dd3ab562d7b93e7225ddbac59b4bc80ff851bb7c381c#clauses](https://explore-testnet.vechain.org/transactions/0x08d6e07a5edde04843a5dd3ab562d7b93e7225ddbac59b4bc80ff851bb7c381c#clauses)
  
# Game Actions
 1. Collecting a chest earns you 4 $DGN tokens, with VTHO used for signing the transaction. The event triggers connection to the Sync2 Desktop wallet as shown below.
  <img width="1299" alt="image" src="https://user-images.githubusercontent.com/43913734/171019376-b6bdc43e-e244-45fd-9929-08f0427eff2f.png">


 2. Then we open a transaction is signed and can be viewed in the activities. Note that the wallet is referring to the Token contract f(x) --> ending in `****EdD1`, and incurrs a small transaction fee of 0.81VTHO.
<p><img width="328" alt="image" src="https://user-images.githubusercontent.com/43913734/171019510-60a2849b-6694-4549-a761-73920961b8e8.png">
<img width="325" alt="image" src="https://user-images.githubusercontent.com/43913734/171019611-0ecc6adc-2ea3-4702-8363-0cdacf0cc5c3.png">
  <img width="329" alt="image" src="https://user-images.githubusercontent.com/43913734/171020198-187be8b7-8f6b-40e8-bdeb-7358dfa6cea4.png">
<img width="327" alt="image" src="https://user-images.githubusercontent.com/43913734/171020282-00f59428-0e72-44bc-bd86-d9b2ef8e63f5.png">

  </p>
  
3. Kill enemies with the dagger. Every enemy character has a different HP.
  <img width="816" alt="image" src="https://user-images.githubusercontent.com/43913734/171020731-985d8b7c-ff0f-4282-83b5-b04ae0217176.png">

4. Analytics can be viewed in the sponsorship dashboard, where we can add signer and reciver accounts, contract ABIs and whitelist accounts to sign transactions and even delegate transaction for others on the network. You can upload your contract ABI to have it decoded and see more details:
<img width="1440" alt="Screenshot 2022-05-30 at 8 43 01 PM" src="https://user-images.githubusercontent.com/43913734/171021216-700256fd-b009-4db7-a283-3348fe857b3d.png">

5. Player has three lives, can view number of DGN coins collected, and also the number of Vechain NFTs collected.
<img width="825" alt="image" src="https://user-images.githubusercontent.com/43913734/171021653-e3c7c84f-ff20-42c0-ad2b-c0c7c5556106.png">

6. Player has to break walls unlock the room, and set the mysterious wizard free and obtain a key to unlock the token-gates.
<img width="224" alt="image" src="https://user-images.githubusercontent.com/43913734/171021917-3399f25b-10ef-43f6-8b21-a8de0619fbc3.png">

7. In the end, the player kills the evil angel, obtains the key to the 2nd token gate and receives the Vechain NFT that marks the level pass.
<p><img width="1342" alt="image" src="https://user-images.githubusercontent.com/43913734/171022208-6d43d7bc-a4a5-4a67-a56c-47a4b79ac9be.png">
  <img width="1440" alt="Screenshot 2022-05-30 at 8 50 26 PM" src="https://user-images.githubusercontent.com/43913734/171022343-9e10bbd0-ca0b-4167-a3d9-5a1cd8b5bf65.png"></p>




