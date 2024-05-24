function Create(){
    const content = `Synopsis:`;
    return (
        <div>
        <div className="content-box6">
      
      <form action="#">
        <h2>CREATE NEW COMIC</h2>
        <div className="form-fields">
          <div>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" placeholder="Title" />
          </div>
          <div>
            <label htmlFor="author">Author:</label>
            <input type="text" id="author" name="author" placeholder="Author" />
          </div>
          <div>
            <label htmlFor="publisher"> Publisher:</label>
            <select id="publisher" name="publisher">
              <option>Select</option>
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
            <input type="text" id="genre" name="genre" placeholder="Genre" />
          </div>
          <div>
            <label HtmlFor="pages">Number of pages:</label>
            <input
              type="number"
              id="pages"
              name="pages"
              placeholder="Number of pages"
            />
          </div>
          <div>
            <label htmlFor="rating">Rating:</label>
            <input type="number" id="rating" name="rating" min="0" max="5" />
          </div>
          <div>
            <label htmlFor="synopsis">Synopsis:</label>
            
            <textarea defaultValue={content}
              type="textarea"
              id="synopsis"
              name="synopsis"
              placeholder="synopsis"/>
          </div>
          <div>
            <button type="submit" className="button-yellow">Submit</button>
          </div>
        </div>
      </form>
    </div>
    </div>

    )
}

export default Create;