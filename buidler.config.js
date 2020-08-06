usePlugin('@nomiclabs/buidler-ethers')
usePlugin('@nomiclabs/buidler-etherscan')

module.exports = {
  solc: {
    version: '0.6.0'
  },
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
