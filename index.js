const express = require('express');
const mongoose = require('mongoose');

mongoose
	.connect('mongodb://localhost:27017/umAPI', { useNewUrlParser: true })
	.then(() => {
		console.log('Connected to mongodb');
	});

const users = require('./routes/users');
const auth = require('./routes/auth');

const app = express();

app.use(express.json());
app.use('/api/users', users);
app.use('/api/auth', auth);

app.listen(8080, () => {
	console.log('Server has started');
});
