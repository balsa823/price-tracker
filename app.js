const express = require('express')
const app = express()

const {supportedCoins, PORT, INTERVAL} = require('./consts')
const {sleep} = require('./utils')

const chainService = require('./chain.service')
const coingeckoService = require('./coingecko.service')


app.get('/history', async (req, res) => {
	let coin = req.query.coin || "bitcoin"
	const prices = await chainService.getPastPrices(coin)

	res.send(prices)
});


app.get('/price', async (req, res) => {
	let coin = req.query.coin || "bitcoin"
	const data = {
		'onchain': await chainService.getPrice(coin),
		'coingecko': await coingeckoService.getPrice(coin)
	}

	res.send(data)
});

(async () => {
	try{
		while (true) {

			const api_data = await coingeckoService.getPrices(supportedCoins)
			try{
				await chainService.sendData(api_data);
			}catch (e) {
				console.info(e)
			}

			await sleep(INTERVAL)
		}
	}catch (e) {
		console.log(e)
		process.exit(0)
	}

})();


app.listen(PORT, function(err){
	if (err) console.log("Error in server setup")
	console.log("Server listening on Port", PORT);
});



