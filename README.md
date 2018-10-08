# Simple Ethereum implementation using Express.js and Truffle.js

Requirements:
- npm
- express / express-generator
- truffle and ganache

Make it from scratch
1. Download npm and express-generator
2. Generate a new directory by using 
```
express --view=pug *name of directory*w
```
3. Install npm modules using npm install
4. Check if its working by npm start -- localhost:3000
5. Install ganache and truffle js
6. Configure 


zepplin - npm install, instead of linking outside, you can install it via npm
solidity
metamask

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