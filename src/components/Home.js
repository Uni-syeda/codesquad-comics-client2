import booksData from "../data/books";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(booksData);
  }, []);

  return (
    <div>
      <h2>Our Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {/* Display book details */}
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
