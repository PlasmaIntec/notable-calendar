const express = require('express');
const parser = require('body-parser');
const path = require('path');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;
const list = require('./data/list');

const public = path.join(__dirname, './public');

app.use(morgan('dev'));
app.use('/', express.static(public));

app.get('/physicians', (req, res) => {
	const physicians = list.map(physician => ({
		id: physician.id,
		name: physician.name,
	}))
	res.send(physicians);
})

app.post('/appointments', parser.json(), (req, res) => {
	const appointments = list.find(physician => physician.name === req.body.name);
	res.send(appointments);
})

app.listen(port, () => {
  console.log(`Express reviews server running at: http://localhost:${port}`);
});