
const hre = require("hardhat");
async function main() {
  const getContract = await hre.ethers.getContractFactory("demoERC20");
  
  const deployContract = await getContract.deploy();
  
  await deployContract.waitForDeployment();
  console.log("Contract Address :", await deployContract.getAddress());
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
