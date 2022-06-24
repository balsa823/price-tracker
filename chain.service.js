const _ = require('lodash')
const Web3 = require('web3')
const {
	infuraEndpoint,
	contractABI,
	contractAddress,
	myAccount,
	privateKey} = require('./consts');

const web3 = new Web3(new Web3.providers.HttpProvider(infuraEndpoint))

web3.eth.accounts.wallet.add(privateKey)
const account = web3.eth.accounts.wallet[0].address

const sendData = async (data) => {
	console.log("Sending ", data ,"...")
	const contract = new web3.eth.Contract(contractABI, contractAddress)

	for ( const [coin, price] of _.toPairsIn(data) ){
		const value = Math.round(price * 100)
		const count = await web3.eth.getTransactionCount(myAccount)

		await contract.methods.set(coin, value).send(
			{
				from: account,
				nonce: web3.utils.toHex(count),
				gasLimit: 100000,
			})
	}

	console.log("Successfully sent: ", data)
}


const getPastPrices = async( coin ) => {
	const contract = new web3.eth.Contract(contractABI, contractAddress)

	const events = await contract.getPastEvents({
		topics: [
			web3.utils.sha3('PriceChanged(string,int256)') ,
			web3.utils.sha3(coin)
		],
		fromBlock: 0,
		toBlock: 'latest'
	});

	return events.map( ( event ) => ({
		event_type: event.event,
		price: event.returnValues.price / 100,
		blockNumber: event.blockNumber,
	}))
}

const getPrice = async (coin) => {
	const contract = new web3.eth.Contract(contractABI, contractAddress)

	const onchainPrice = await contract.methods.get(coin).call();
	return onchainPrice  / 100;
}


module.exports = {
	sendData,
	getPastPrices,
	getPrice
}


