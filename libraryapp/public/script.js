async function searchBooks() {
    const searchInput = document.getElementById('searchInput').value;
    const bookList = document.getElementById('bookList');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const bookDetails = document.getElementById('bookDetails');

    try {
        // Display loading spinner while waiting for the API response
        loadingSpinner.classList.remove('hidden');

        const response = await fetch(`/search?title=${searchInput}`);
        const data = await response.json();

        // Clear previous results and details
        bookList.innerHTML = '';
        bookDetails.innerHTML = '';
        
        // Display search results
        data.forEach(book => {
            const listItem = document.createElement('li');
            listItem.textContent = `${book.title} by ${book.author}`;
            listItem.addEventListener('click', () => showBookDetails(book));
            bookList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching book data:', error);
        // Handle errors (e.g., display an error message)
    } finally {
        // Hide loading spinner after the API response is received
        loadingSpinner.classList.add('hidden');
    }
}

function clearResults() {
    document.getElementById('bookList').innerHTML = '';
    document.getElementById('searchInput').value = '';
    document.getElementById('bookDetails').innerHTML = '';
}

function showBookDetails(book) {
    const bookDetails = document.getElementById('bookDetails');
    bookDetails.innerHTML = `
        <h2>${book.title}</h2>
        <p>Author: ${book.author}</p>
        <!-- Add more details as needed -->
    `;
    bookDetails.classList.remove('hidden');
}

function sortResults() {
    const sortSelect = document.getElementById('sortSelect');
    const sortBy = sortSelect.value;
    const bookList = document.getElementById('bookList');
    const books = Array.from(bookList.children);

    books.sort((a, b) => {
        const aText = a.textContent.toLowerCase();
        const bText = b.textContent.toLowerCase();

        if (sortBy === 'title') {
            return aText.localeCompare(bText);
        } else if (sortBy === 'author') {
            const aAuthor = aText.split('by')[1].trim();
            const bAuthor = bText.split('by')[1].trim();
            return aAuthor.localeCompare(bAuthor);
        }

        return 0;
    });

    bookList.innerHTML = '';
    books.forEach(book => bookList.appendChild(book));
}
