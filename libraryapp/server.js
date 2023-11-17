const express = require('express');
const app = express();
const PORT = 3000;

const library = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    // Add more books as needed
];

app.use(express.static('public'));

app.get('/search', (req, res) => {
    const searchTerm = req.query.title.toLowerCase();
    const results = library.filter(book => book.title.toLowerCase().includes(searchTerm));
    res.json(results);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
