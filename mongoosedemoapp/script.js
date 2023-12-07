const mongoose = require('mongoose');

// // Connect to MongoDB
// mongoose.connect("mongodb://localhost/testdb", { useNewUrlParser: true, useUnifiedTopology: true });

// // Event handlers
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'Connection error:'));
// db.once('open', () => {
//     console.log('Connected to the database!');
// });

// // Optional: Handle disconnection events
// db.on('disconnected', () => {
//     console.log('Disconnected from the database');
// });

// // Gracefully close the database connection on application termination
// process.on('SIGINT', () => {
//     mongoose.connection.close(() => {
//         console.log('Connection closed due to application termination');
//         process.exit(0);
//     });
// });
const user=require("./user")
mongoose.connect("mongodb://localhost//testdb")

