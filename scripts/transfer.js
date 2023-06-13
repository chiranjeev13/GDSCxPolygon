const { ethers } = require("ethers");
const abijson = require("../artifacts/contracts/demoERC20.sol/demoERC20.json");

const ABI = abijson.abi;

const contractAddress = "/* your contract address */";

async function transfer() {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://rpc.public.zkevm-test.net"
  );
  const privateKey = process.env.PRIVATE_KEY;
  const wallet = new ethers.Wallet(privateKey, provider);
  const newsignedContract = new ethers.Contract(
    contractAddress,
    ABI,
    wallet.connect(provider)
  );
  const amount = ethers.utils.parseUnits("/* token amount */", 18);
  const res = await newsignedContract.transfer(
    "0x546F82f5eF2Fd82F26Ff8b5Ef8AC9f14b953424E" /* my address */,
    amount
  );
  console.log(res);
}

transfer();
