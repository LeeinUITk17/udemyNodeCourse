const express = require('express');
const app = express();

const { getPosts} = require('./routes/post');

// Define a single route handler that combines the functionality
// app.get("/", (req, res) => {
//     getPosts(req, res);  // Call getPosts function
//     saysomething(req, res);  // Call saysomething function
// });
app.get("/",getPosts);
const port = 8080;
app.listen(port, () => {
    console.log(`A nodejs API is listening on port ${port}`);
});
