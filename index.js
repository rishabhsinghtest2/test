const express = require('express');
const app = express();

var port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log('server is listining at : ', port);
});
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});
app.get('/test', (req, res) => {
	res.sendFile(__dirname + '/public/test/test.html');
});
