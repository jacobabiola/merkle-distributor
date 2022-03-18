var MerkleDistributor = artifacts.require('MerkleDistributor')
//token address should be your custom token address
const tokenAddress = '0x6914c4c0e08016ad9d3381ae8d03560df670e5c1'
//merkleRoot from merkle tree output
const tree = '0x88a7af246090eb1a2a9b7d01c322de07b5b49ce41f543544e6320216ff2b57cb'
module.exports = function (deployer) {
  deployer.deploy(MerkleDistributor, tokenAddress, tree)
}
