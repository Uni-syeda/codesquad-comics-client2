function Login(){
    return (
    
        <div>
          <div className="content-box6">
            <form action="#">
              <h1>LOGIN</h1>
              <div className="form-fields">
      
              <div>
              <label htmlFor="Email address">Email:</label>
              <input type="text" id="Email address" name="Email address"
                placeholder="Email"/>
              </div>
      
              <div>
              <label htmlFor="password" className="content1">Password:</label>
              <input type="password" id="password" name="password" placeholder="Password"/><br /><br />
              </div>
      
              <div>
              <button type="submit" className="button-yellow content3">Submit</button>
              </div>
              </div>
            </form>
          </div>
          </div>
        
    )
}

export default Login;