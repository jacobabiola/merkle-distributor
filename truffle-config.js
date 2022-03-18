
const HDWalletProvider = require("@truffle/hdwallet-provider");
//const HDWalletProvider = require("truffle-hdwallet-provider");
require('dotenv').config();

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "5777"
        },
        test: {
            host: "localhost",
            port: 8545,
            network_id: "*"
        },
        mainnet: {
              provider: () =>
        new HDWalletProvider({
          mnemonic:  {
            phrase: "......"
          },
          providerOrUrl: "https://api.avax.network/ext/bc/C/rpc",
          shareNonce: true,
          
        }),
        network_id: '43114',
        },
        
      

     fuji: {
    
      provider: () =>
        new HDWalletProvider({
          mnemonic:  {
            phrase: "....."
          },
          providerOrUrl: "https://api.avax-test.network/ext/bc/C/rpc",
          shareNonce: true,
          
        }),
      network_id: '43113',
    }
  },


    compilers: {
        solc: {
            version: "0.6.11",
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },

    plugins: [
        'truffle-plugin-verify'
    ],

    api_keys: {
      snowtrace: "..."
    }
};