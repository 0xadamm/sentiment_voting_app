const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const MarketSentiment = await hre.ethers.getContractFactory(
    "MarketSentiment"
  );

  const marketSentiment = await MarketSentiment.deploy();
  await marketSentiment.deployed();

  console.log("MarketSentiment deployed to:", marketSentiment.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
