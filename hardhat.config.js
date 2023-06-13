require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",

  networks: {
    hardhat: {
      chainId: 1337,
    },
    zkEVM_testnet: {
      chainId: 1442,
      url: "https://rpc.public.zkevm-test.net",
      accounts: [process.env.PRIVATE_KEY],
      blockConfirmations: 6,
    },
  },

  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};
