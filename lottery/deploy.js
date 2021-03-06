require("dotenv").config();
const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

myMnemonic = process.env.mnemonic;
const provider = new HDWalletProvider(
	myMnemonic,
	"https://rinkeby.infura.io/v3/d4308708f8a043b6b790208b3845d08d"
);
const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();

	console.log("Attempting to deploy from account", accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({ data: bytecode })
		.send({ gas: "1000000", gasPrice: "5000000000", from: accounts[0] });

	console.log(interface);
	console.log("Contract deployed to", result.options.address);
};
deploy();
