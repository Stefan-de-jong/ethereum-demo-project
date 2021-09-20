import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	"0x1B9540754D4660BA795f92Bd500AA5e29669d0B8"
);

export default instance;
