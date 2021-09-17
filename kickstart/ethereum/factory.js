import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	"0xDA28cC6bd3eF6deE1FD4FFCad6eF0Fb3aA3386be"
);

export default instance;
