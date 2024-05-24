function Admin(){
    return (
    <div>
    <div className="content-box5">
      
      <h1>ADMIN PAGE</h1>
      <div className="add-button">
      <button type="button" className="button-yellow">ADD NEW COMIC</button>
      </div>
      <div className="center">
      <table className="table-data center">
        //<!-- Table Header -->
        <thead>
          <tr>
            <th>COMIC TITLE</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>

        <!-- Table Body -->
        <tbody>
          <!-- Row 1 -->
          <tr>
            <td>Batman: The Dark Knight Returns</td>
            <td><button class="button">EDIT</button></td>
            <td><button class="button-yellow">DELETE</button></td>
          </tr>

          <!-- Row 2 -->
          <tr>
            <td>Black Panther: A Nation Under Our Feet Book 1</td>
            <td><button class="button">EDIT</button></td>
            <td><button class="button-yellow">DELETE</button></td>
          </tr>
          <!-- Row 3 -->
          <tr>
            <td>Fub Home: A Family Tragicomic</td>
            <td><button class="button">EDIT</button></td>
            <td><button class="button-yellow">DELETE</button></td>
          </tr>
          <!-- Row 4-->
          <tr>
            <td>Hunter X Hunter Vol. 1</td>
            <td><button class="button">EDIT</button></td>
            <td><button class="button-yellow">DELETE</button></td>
          </tr>

          <!-- Row 5 -->
          <tr>
            <td>Lumberjanes Vol. 1</td>
            <td><button class="button">EDIT</button></td>
            <td><button class="button-yellow">DELETE</button></td>
          </tr>
          <!-- Row 6 -->
          <tr>
            <td>March:Book One</td>
            <td><button class="button">EDIT</button></td>
            <td><button class="button-yellow">DELETE</button></td>
          </tr>
          <!-- Row 7 -->
          <tr>
            <td>One Piece, Vol. 1: Romance Dawn</td>
            <td><button class="button">EDIT</button></td>
            <td><button class="button-yellow">DELETE</button></td>
          </tr>
          <!-- Row 8 -->
          <tr>
            <td>Parable of the Sower</td>
            <td><button class="button">EDIT</button></td>
            <td><button class="button-yellow">DELETE</button></td>
          </tr>
          <!-- Row 9-->
          <tr>
            <td>Queer: A Graphic History</td>
            <td><button class="button">EDIT</button></td>
            <td><button class="button-yellow">DELETE</button></td>
          </tr>
          <!-- Row 10 -->
          <tr>
            <td>The Walking Dead, Vol. 1:Days Gone Bye</td>
            <td><button class="button">EDIT</button></td>
            <td><button class="button-yellow">DELETE</button></td>
          </tr>
          <!-- Row 11 -->
          <tr>
            <td>Wake: The Hidden History of Women-Led Slave Revolts</td>
            <td><button class="button">EDIT</button></td>
            <td><button class="button-yellow">DELETE</button></td>
          </tr>
          <!-- Row 12 -->
          <tr>
            <td>Watchmen</td>
            <td><button class="button">EDIT</button></td>
            <td><button class="button-yellow">DELETE</button></td>
          </tr>
        </tbody>
      </table>
      </div>
      </div>
      </div>
    )
}
export default Admin;