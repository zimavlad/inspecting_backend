const express = require('express');
const cookieParser = require('cookie-parser');

const server = express();

server.set('view engine', 'pug');

server.use(express.static('public'));
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());

// server.get('/styles.css', (req, res) => {
// 	res.sendFile('./styles.css', { root: __dirname });
// })

server.get('/', (req, res) => {
	const username = req.cookies.username;

	res.render('index', {
		username
	});
});

server.post('/', (req, res) => {
	res.cookie('username', req.body.username);

	res.redirect('/');
});

server.listen(3000, '127.0.0.1', () => console.log('Сервер запущен'));