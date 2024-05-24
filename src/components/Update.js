function Update() {
  const content = `synopsis value stored in database`;
  return (
    <div>
      {/* <!-- Form section--> */}
      <div className="content-box6">
        {/* <!-- <div class="content center"> --> */}
        <form action="#">
          <h2>UPDATE COMICS</h2>
          <div classNamw="form-fields">
            <div>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value="title value stored in the database"
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
                value="author value stored in database"
              />
            </div>

            <div>
              <label htmlFor="publisher"> Publisher</label>
              <select id="publisher" name="publisher">
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
                value="genre data stored in the database"
              />
            </div>

            <div>
              <label htmlFor="pages">Number of pages:</label>
              <input type="number" id="pages" name="pages" value="255" />
              <br />
              <br />
            </div>

            <div>
              <label htmlFor="rating">Rating:</label>
              <input
                type="number"
                id="rating"
                name="rating"
                value="rating stored in data base"
              />
            </div>

            <div>
              <label htmlFor="synopsis">Synopsis:</label>

              <textarea
                defaultValue={content}
                type="textarea"
                id="synopsis"
                name="synopsis"
                placeholder="synopsis"
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
