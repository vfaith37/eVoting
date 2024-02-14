import web3 from './web3';
import ElectionFactory from './Build/ElectionFact.json';

const instance = new web3.eth.Contract(
	JSON.parse(ElectionFactory.interface),
    '0xa7D51C3561a41Bb6fC3FCDD5F38f518267dd584A'
);

export default instance;