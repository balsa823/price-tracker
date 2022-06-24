const myAccount = '0x57Ed9472E921176824f0562f34fEAD86c4c94B32';
const supportedCoins = ['bitcoin', 'ethereum']
const infuraEndpoint = 'https://kovan.infura.io/v3/e5dc03c8dee54de89df16cab7aa15089';
const contractAddress = '0x8322Ef83b56832eb4f7D56F72cb2afE66Fce0Be5';
const contractABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"coin","type":"string"},{"indexed":true,"internalType":"int256","name":"price","type":"int256"}],"name":"PriceChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"oin","type":"string"},{"indexed":true,"internalType":"int256","name":"price","type":"int256"}],"name":"PriceRejected","type":"event"},{"inputs":[{"internalType":"string","name":"coin","type":"string"}],"name":"get","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"prices","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"coin","type":"string"},{"internalType":"int256","name":"price","type":"int256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const privateKey = '0x68482b3a2c94782bf32f7b2189e421cb8e79a44f4c9f6640eeb85492578baae9';

const USD = 'usd'

PORT = 3000
INTERVAL = 1000

module.exports = {
	myAccount,
	privateKey,
	supportedCoins,
	infuraEndpoint,
	contractABI,
	contractAddress,
	USD,
	PORT,
	INTERVAL
}
