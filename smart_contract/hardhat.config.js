require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/z4WpA8UKgqnwbTYmrZu15yCOiijBKaRv',
      accounts: ['b4640d78b9e7f1c5ed08e71f3d296adbde2890d6670435d89bb9ba1803b659a4'],
    },
  },
};