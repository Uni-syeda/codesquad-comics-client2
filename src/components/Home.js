import booksData from "../data/books";
function Home() {
    console.log(booksData[0])
  return (
    <div>
      {/* Fun-home-card Section */}
    <h1>Home Page</h1>
      <div className="fun-home-card-border">
        <div className="fun-home-background-color">
          {booksData.map((book)=>(
            <div>
            <h3>{book.title}</h3>
            <img src={`/images/images/${book.image}`} alt={book.title} />
            <p>
              <span className="fun-home-card-bottom">Author:</span>{book.author}
            </p>
            <p>
              <span className="fun-home-card-bottom">Rating:</span>{book.rating}
            </p>
            </div>
          ))}  
          
          </div>
        </div>
      </div>

  );
}
export default Home;
