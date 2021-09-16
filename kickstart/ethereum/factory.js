import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	"0xeE80BEF78bcDaC32d2fDe1a9Ad80ddBf70f444E2"
);

export default instance;
