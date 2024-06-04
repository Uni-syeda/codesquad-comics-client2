import React from "react";
import booksData from "../data/books";
import {useState , useEffect} from "react";

function Update() {
  const id = booksData[0]._id;
  const [book, setBooks] = useState({})
  useEffect(()=>{
    const newBook = booksData.find((book)=>book._id === id)
    setBooks(newBook);
  },[id])
  const updateForm = (e) => {
    e.preventDefault();
    console.log("this method ran");
    console.log(e.target.title.value);
    console.log(e.target.author.value);
    console.log(e.target.publisher.value);
    console.log(e.target.genre.value);
    console.log(e.target.pages.value);
    console.log(e.target.rating.value);
    console.log(e.target.synopsis.value);
  };

return (
    <div>
      {/* <!-- Form section--> */}
      <div className="content-box6">
        {/* <!-- <div class="content center"> --> */}
        <form action="#" onSubmit={updateForm}>
          <h2>UPDATE COMICS</h2>
          <div className="form-fields">
            <div>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={book.title} required
              />
              <br />
              <br />
            </div>

            <div>
              <label htmlFor="author">Author</label>
              <input
                type="text"
                id="author"
                name="author"
                value={book.author} required
              />
            </div>

            <div>
              <label htmlFor="publisher"> Publisher</label>
              <select id="publisher" name="publisher" value={book.publisher}>
                <option selected value="database-value">
                  publisher value stored in the database
                </option>
                <option value="boom-box">Boom! Box</option>
                <option value="DC Comics">DC Comics</option>
                <option value="Harry N. Abrams">Harry N. Abrams</option>
                <option value="Icon Books">Icon Books</option>
                <option value="Image Comics">Image Comics</option>
                <option value="Marvel">Marvel</option>
                <option value="Simon & Schuster">Simon & Schuster</option>
                <option value="Top Shelf Productions">
                  Top Shelf Productions
                </option>
                <option value="VIZ Media LLC">VIZ Media LLC</option>
              </select>
            </div>

            <div>
              <label htmlFor="genre">Genre:</label>
              <input
                type="text"
                id="genre"
                name="genre"
                value={book.genre} required
              />
            </div>

            <div>
              <label htmlFor="pages">Number of pages:</label>
              <input type="number" id="pages" name="pages" value={book.pages} required />
              <br />
              <br />
            </div>

            <div>
              <label htmlFor="rating">Rating:</label>
              <input
                type="number"
                id="rating"
                name="rating"
                value={book.rating} required
              />
            </div>

            <div>
              <label htmlFor="synopsis">Synopsis:</label>

              <textarea
                type="textarea"
                id="synopsis"
                name="synopsis"
                placeholder="synopsis" value={book.synopsis}
              />
            </div>

            <div>
              <button type="submit" className="button-yellow">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Update;
