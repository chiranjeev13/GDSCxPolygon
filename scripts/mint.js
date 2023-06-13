const { ethers } = require("ethers");
const abijson = require("../artifacts/contracts/demoERC20.sol/demoERC20.json");

const ABI = abijson.abi;

const contractAddress = "/* your contract address */";

async function mint() {
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

  const amount = 20; /* amount of tokens to mint */
  const res = await newsignedContract.mint(amount);
  console.log(res);
}

mint();
