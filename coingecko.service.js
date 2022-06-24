const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();
const { USD } = require('./consts')
const _ = require('lodash')

const getPrices = async ( coins ) => {
	if(!coins) return null

	if(! _.isArray(coins)){
		return null
	}

	let {data} = await CoinGeckoClient.simple.price({
		ids: coins,
		vs_currencies: [USD],
	});

	return _.mapValues(data, ( value ) => { return value[USD]})
}

const getPrice = async ( coin ) => {
	if(!coin) return null

	if( _.isArray(coin) ){
		return null
	}

	const { data } = await CoinGeckoClient.simple.price({
		ids: [coin],
		vs_currencies: [USD],
	});

	return data[coin][USD]
}

module.exports = {
	getPrice,
	getPrices
}
