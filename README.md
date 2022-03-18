# ERC20 Claim merkle-distributor

[![Tests](https://github.com/Uniswap/merkle-distributor/workflows/Tests/badge.svg)](https://github.com/Uniswap/merkle-distributor/actions?query=workflow%3ATests)
[![Lint](https://github.com/Uniswap/merkle-distributor/workflows/Lint/badge.svg)](https://github.com/Uniswap/merkle-distributor/actions?query=workflow%3ALint)

This repo contains the contract to do token claim distribution for a set of users by precomputing the merkle root hash, indices and proofs for all users before loading that hash on chain.

# Local Development

The following assumes the use of `node@>=10`.

## Install Dependencies

`yarn`

## Compile Contracts

`yarn compile`

## Run Tests

`yarn test`

## How to use

There are two pieces of information that the migrations depend, the `tokenAddress` and `merkleRoot`. tokenAddress is the address for the ERC-20 token and the `merkleRoot` instructions are given below.

## Generating the merkle root and the JSON file

This repo contains contract and the script to convert a json array of `[{ "address": <address>, "earnings": <integer wei amount>, "reasons": '' }]` into the merkle object. In order to generate that object:

    1. In the scripts/ folder run ```python csv_to_json.py``` to convert our csv with columns ```wallet``` and ```tokens``` to a uniswap script compatible ```[{ "address": <address>, "earnings": <integer wei amount>, "reasons": '' }]``` array.
    2. In the ```merkle-distributor``` repo under scripts/ run ```tsc``` to generate the node.js files.
    3. Run ```node generate-merkle-root.js -i snapshot.json >> snapshot_merkle_output.json``` to get the merkle object
    4. Run ```node verify-merkle-root.js -i snapshot_merkle_output.json against the output merkle json``` object to verify it's validity.
    5. Once the validation passes, the object is finalized and the merkle root hash can be used

## How to deloy

`truffle migrate --network mainnet`

## How to verify

`truffle run verify MerkleDistributor --network fuji`
