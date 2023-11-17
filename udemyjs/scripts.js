// Constructor function for person
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding method to the prototype of Person
Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Instances of Person
const person1 = new Person('Tai', 19);
const person2 = new Person('Tuan', 26);

person1.sayHello();
person2.sayHello();

// Object literal for human
const human = {
    name: 'Tai',
    age: 19,
    sayHi: function() {
        console.log(`Hello girl, my name is Mr.${this.name}`);
        console.log(`Nice to meet you ^-^`);
    }
};

console.log(human.name);
human.sayHi();

// ES6 class for Student
class Student {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    showInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.id}`);
    }
}

// Instances of Student
const student1 = new Student('John Mayer', 2121112);
const student2 = new Student('Mike Tyson', 1212121);

student1.showInfo();
student2.showInfo();

// ES6 class for Book
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

// ES6 class for Library
class Library {
    constructor() {
        this.libraryBooks = [];
    }

    addBook(book) {
        this.libraryBooks.push(book);
    }

    listBooks() {
        if (this.libraryBooks.length === 0) {
            console.log('The library is empty.');
        } else {
            console.log('Books in the library:');
            this.libraryBooks.forEach(book => {
                console.log(`${book.title} by ${book.author}`);
            });
        }
    }
}

// Instances of Book and Library
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald');
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee');
const library = new Library();

library.addBook(book1);
library.addBook(book2);

library.listBooks();
