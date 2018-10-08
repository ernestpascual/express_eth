var BitcoinPH = artifacts.require("./BlockPP.sol");

module.exports = function(deployer) {
  deployer.deploy(BitcoinPH, 21000000);
  

};