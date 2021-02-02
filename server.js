const express = require("express");
const cors = require("cors");
const usersRouter = require("./users/users-router");
const eventsRouter = require("./events/events-router");

const server = express();

server.use(cors());
server.use(express.json());
server.use('/users', usersRouter);
server.use('/events', eventsRouter);

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