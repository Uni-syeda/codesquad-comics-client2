import React from 'react';
const About = () => {
    return (
      <div>
          <div>About</div>
          {/* <!-- Footer section --> */}
    <footer>
      <div className="footer-bar">
        <div className="nav-display">
          <h2>VISIT US</h2>

          <p>
            CodeSquad Comics <br />
            123 Dorchester Avenue <br />
            Boston, MA 02124
          </p>
        </div>
        <div className="nav-display">
          <h2>LINKS</h2>
          <a href="#">Home</a><br />
          <a href="#">About</a><br />
          <a href="#">Login</a>
        </div>

        <div className="nav-display icon">
          <h2>FOLLOW US</h2>
          {/* <!-- social media links --> */}
          <a href="#"><i className="fa-brands fa-facebook icon"></i></a><br />
          <a href="#"><i className="fa-brands fa-square-instagram"></i></a><br />
          <a href="#"><i className="fa-brands fa-square-x-twitter"></i></a>
        </div>
        <div className="nav-display">
          <h2>A PRODUCT OF</h2>
          {/* <!-- CodeSquad Logo link to codesquad.org --> */}
          <a href="http://codesquad.org/" target="_blank">
            <img
              src="public/images/CodeSquad-logo-b.png"
              alt="CodeSquad-logo-b"
              className="CodeSquad-logo-footer"
            />    
          </a>
        </div>
      </div>
    </footer> 


      </div>  
    )
  }
  export default About;