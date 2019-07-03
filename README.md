### Smartpress Node.js / VUE.js example application

## 🧐 About

<a href="https://app.smart.press">Smartpress platform</a>
<a href="https://www.smart.press">Smartpress website</a>

## Getting Started

To run a basic example, run the following commands:

## Project setup
```
npm install
```

### Runs frontend
```
npm run serve
```

## Runs backend
```
node node/index.js
```

## Usage

To connect smartpress to your server, see the following example in node/index.js

```js
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
```


### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
