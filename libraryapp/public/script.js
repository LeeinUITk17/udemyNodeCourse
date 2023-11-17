async function searchBooks() {
    const searchInput = document.getElementById('searchInput').value;
    const bookList=document.getElementById('bookList');
    const loadingSpinner=document.getElementById('loadingSpinner');

    try {
        // const response = await fetch(`/search?title=${searchInput}`);
        // const data = await response.json();

        // const bookList = document.getElementById('bookList');
        // bookList.innerHTML = '';

        // data.forEach(book => {
        //     const listItem = document.createElement('li');
        //     listItem.textContent = `${book.title} by ${book.author}`;
        //     bookList.appendChild(listItem);
       // });

     loadingSpinner.classList.remove('hidden');
     const response=await fetch(`/search?title=${searchInput}`);
     const data=await response.json();

     bookList.innerHTML='';

     data.forEach(book => {
        const listItem=document.createElement('li');
        listItem.textContent=`${book.title} by ${book.author}`;
        bookList.appendChild(listItem);
     });

    } catch (error) {
        console.error('Error fetching book data:', error);
    } finally{
        loadingSpinner.classList.add('hidden');
    }
}

function clearResults(){
    document.getElementById('bookList').innerHTML='';
    document.getElementById('searchInput').value='';
}
