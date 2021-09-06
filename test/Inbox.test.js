const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // Constructor instance, so capital W

// The new web3 instance needs a provider to communicate with a specific network
// This can be replaced by another provider when connection to another network (ganache is local test network)
const web3 = new Web3(ganache.provider());

