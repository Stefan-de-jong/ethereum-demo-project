# Ethereum-demo-project
Demo project for a Udemy course on ethereum &amp; solidity I'm following

The code in this repo are some very basic smart contracts, used to practice with solidity en writing tests for solidity as well.

# Prerequisites
- install the metamask chrome plugin
- follow the instructions in the plugin to setup an account (be sure to write down the mnemonic / 20 secret words)

# Install
- git-clone the project
- cd into the specific project (i.e. 'inbox')
- npm install (needs to be done once, per separate project)

# Run tests
- you will need to setup an .env file at the root of a specific folder (i.e. 'inbox')
- add your metamask mnemonic to the .env file, make sure to adjust the correct key in the deploy.js script
- if the above steps are followed, 'npm run test' will run the tests
