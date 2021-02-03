const express = require("express");
const cors = require("cors");
const usersRouter = require("./users/users-router");
const eventsRouter = require("./events/events-router");
const itemsRouter = require("./items/items-router");
const restrict = require('./middleware/auth');
const cookieParser = require('cookie-parser');

const server = express();

server.use(cors());
server.use(express.json());
server.use(cookieParser());
server.use('/users', usersRouter);
server.use('/events', restrict, eventsRouter);
server.use('/items', restrict, itemsRouter);

server.get('/', (req, res) => {
	res.json({
		message: 'up and running',
	})
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server