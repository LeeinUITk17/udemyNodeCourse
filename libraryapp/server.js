const express = require('express');
const app = express();
const PORT = 3000;

const library = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
    { title: 'Pride and Prejudice', author: 'Jane Austen' },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
    { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
    { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
    { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling' },
    { title: 'To the Lighthouse', author: 'Virginia Woolf' },
    { title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez' },
    { title: 'The Hitchhiker\'s Guide to the Galaxy', author: 'Douglas Adams' },
    { title: 'The Shining', author: 'Stephen King' },
    { title: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson' },
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
