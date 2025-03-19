import React, { useState } from "react";

class BookStackClass {
  constructor() {
    this.items = [];
  }

  push(book) {
    this.items.push(book);
  }

  pop() {
    return this.items.length > 0 ? this.items.pop() : null;
  }

  peek() {
    return this.items.length > 0 ? this.items[this.items.length - 1] : null;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    return this.items.slice().reverse();
  }
}

const bookStack = new BookStackClass();

const BookStack = () => {
  const [name, setName] = useState("");
  const [ID, setID] = useState("");
  const [author, setAuthor] = useState("");
  const [editorial, setEditorial] = useState("");
  const [books, setBooks] = useState([]);

  const addBook = () => {
    const newBook = { name, ID, author, editorial };
    bookStack.push(newBook);
    setBooks([...bookStack.print()]);
    setName("");
    setID("");
    setAuthor("");
    setEditorial("");
  };

  const removeBook = () => {
    bookStack.pop();
    setBooks([...bookStack.print()]);
  };

  return (
    <div>
      <h1>Book Stack</h1>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="ID" value={ID} onChange={(e) => setID(e.target.value)} />
      <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <input type="text" placeholder="Editorial" value={editorial} onChange={(e) => setEditorial(e.target.value)} />
      <button onClick={addBook}>Add Book</button>
      <button onClick={removeBook} disabled={bookStack.isEmpty()}>Remove Top Book</button>
      <h2>Stack of Books:</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book.name} - {book.ID} - {book.author} - {book.editorial}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookStack;