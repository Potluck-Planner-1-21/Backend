const express = require("express");
const cors = require("cors");
// const petsRouter = require("./pets/pets-router");

const server = express();

server.use(cors());
server.use(express.json());
// server.use('/pets', petsRouter);

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