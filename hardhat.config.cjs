require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  settings: {
    optimizer: {
      enabled: true,
      runs: 1000,
    },
  },
  networks: {
    harhat: {
      url: "31337",
    },
    polygon: {
      url: import.meta.env.VITE_INFURA,
      accounts: import.meta.env.VITE_PRIVATE,
    },
  },
  etherscan: {
    apiKey: import.meta.env.VITE_POLYSCAN,
  },
};
