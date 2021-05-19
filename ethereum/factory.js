import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
const { address } = require('./secret');

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  address // this is the address of the deployed contract
);

export default instance;
