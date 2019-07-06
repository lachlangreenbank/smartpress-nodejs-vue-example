
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(cors())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const Smartpress = require('smartpress')
const spConfig = require('../SmartpressAPI/smartpressConfig.js')

const smartpress = new Smartpress(spConfig)

app.post('/createAccount', async function (req, res) {
	if (typeof req.body.data.user_id == 'string') {
		let data = await smartpress.createAccount({user_id: req.body.data.user_id})
	    res.send({success: true, data: data})
	} else {
		res.send({success: false, data: {message:"Missing string user_id"}})
	}
	return;
})

app.post('/send', async function (req, res) {
	console.log(req.body)
	if (typeof req.body.data.sender == 'string' && typeof req.body.data.receiver == 'string' && typeof req.body.data.amount) {
		
		let sender = req.body.data.sender,
		receiver = req.body.data.receiver,
		amount = req.body.data.amount

		let tx = {
			sender: sender, receiver: receiver,
			assetType: 'token', symbol: 'AAA',
			amount: amount, memo: 'Test transfer'
		}
		let data = await smartpress.sendAsset(tx)
		res.send({success: true, data: data})
	} else {
		res.send({success: false, data: {message:"Missing string sender, receiver or amount"}})
	}
	return;
})

app.post('/getBalance', async function (req, res) {
	if (typeof req.body.data.user_id == 'string') {
		let data = await smartpress.getBalance({user_id: req.body.data.user_id, contract_balance: false})
		res.send({success: true, data: data})
	} else {
		res.send({success: false, data: {message:"Missing string user_id"}})
	}
	return
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))