const express = require('express');
<<<<<<< HEAD
const morgan = require('morgan');

const app = express();
const port = 8080;

// Middleware
const myOwnMiddleware = (req, res, next) => {
    console.log('Middleware applied!');
    next();
};

app.use(morgan('dev'));
app.use(myOwnMiddleware);

// Routes
const { getPosts } = require('./routes/post');
app.get('/', getPosts);

app.listen(port, () => {
    console.log(`Node.js API is listening on port ${port}`);
});

