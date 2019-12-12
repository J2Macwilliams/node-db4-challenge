const express = require('express');
const helmet = require('helmet');

// Require router
const recipeRouter = require('../recipes/recipeRouter');

const server = express();
server.use(helmet());
server.use(express.json());

// Global test endpoint
server.get('/', (req, res) => {
res.send(`<h3>Mmm Tasty</h3>`)
});

// Call carRouter
server.use('/api/recipes', recipeRouter);

module.exports = server;