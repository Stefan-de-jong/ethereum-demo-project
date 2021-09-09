const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // Constructor instance, so capital W
// The new web3 instance needs a provider to communicate with a specific network
// This can be replaced by another provider when connection to another network (ganache is local test network)
const web3 = new Web3(ganache.provider());
const { interface, bytecode} = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();

    // Use account to deploy contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: ['Hi there!']})
        .send({ from: accounts[0], gas: '1000000' })
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address)
    });

    it('has a default message', async () => {
        const message = await inbox.methods.message().call();
    assert.equal(message, 'Hi there!')
    });

    it('can change the message', async () => {
        await inbox.methods.setMessage('bye').send({ from: accounts[0] });
        const message = await inbox.methods.message().call();
        assert.equal(message, 'bye');
    });
}); 