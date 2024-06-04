import React, { useState, useEffect } from "react";
import booksData from "../data/books";

const Admin = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(booksData);
  }, []);

  return (
    <div>
      <div className="content-box5">
        <h1>ADMIN PAGE</h1>
        <div className="add-button">
          <button type="button" className="button-yellow">
            ADD NEW COMIC
          </button>
        </div>
        <div className="center">
          <table className="table-data center">
            {/* Table Header */}
            <thead>
              <tr>
                <th>COMIC TITLE</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>
                    <button className="button">EDIT</button>
                  </td>
                  <td>
                    <button className="button-yellow">DELETE</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Admin;
