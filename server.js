const express = require('express');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
	res.send(`Hello, ${process.env.NAME}!`);
});

app.listen(PORT, () => console.log('App running.'));