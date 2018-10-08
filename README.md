# Simple Ethereum implementation using Express.js and Truffle.js

Requirements:
- npm
- express / express-generator
- truffle and ganache

Make it from scratch
1. Download npm and express-generator
2. Generate a new directory with express generator
```
express --view=pug *name of directory*
```
3. Install npm modules using npm install
4. Check if its working: ```npm start ```, [localhost](localhost:3000)is at port 3000
5. Install [Truffle](https://truffleframework.com/docs/truffle/getting-started/installation)
6. I actually copied these files from the previous docker example of Block Devs Asia -- [Blockdevsasia - Ethdev Docker] (https://github.com/blockdevsasia/ethdev_docker):
- contracts/ 
- migrations/
- test/
- truffle.js
For more information about what this folder does, basically I just emulated a bare bones truffle project from truffle init. You can find more information [here](https://truffleframework.com/docs/truffle/getting-started/creating-a-project)
6. Compile contracts!
```
truffle compile
```

Note that when doing truffle init you will only be given a single Migrations.sol file that helps in the deployment process. More info [here](https://truffleframework.com/docs/truffle/getting-started/compiling-contracts)
7. I'll be using an ERC20 token but ill import the whole openzepplin package so you can play with it.
```
npm install openzeppelin-solidity
```
8. I edited the BitcoinPH.sol file a lil bit and pointed the mintable token location to the node_modules directory. Check if it works: 
``` truffle compile```
9. 



Some cleanup
- rm -f truffle-config.js 

Set truffle.js to the following:
```    
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "ganache-cli",
      port: 8545,
      network_id: "*",
      gas: 4600000
    }
  }
};
```

- truffle migrate

## Sources:
[Blockdevasia - Token Example](https://github.com/blockdevsasia/Token-example)

[Blockdevsasia - Ethdev Docker] (https://github.com/blockdevsasia/ethdev_docker)

## Helpful reference links:
[Solidity Documentation](https://solidity.readthedocs.io/en/develop/)
[Truffle Documentation](https://truffleframework.com/docs/truffle/overviews)
[Solving Windows conflicts](https://truffleframework.com/docs/truffle/reference/configuration#resolving-naming-conflicts-on-windows)




