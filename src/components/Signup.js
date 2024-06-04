import React from "react";
function Signup({ user, setUser }) {
    const signupForm = (e) => {
        e.preventDefault();
        console.log("this method ran");
        console.log(e.firstName.value);
        console.log(e.lastName.value);
        console.log(e.email.value);
        console.log(e.password.value);
      };
  return (
    <div>
      <div className="content-box6">
        <form action="#" onSubmit={signupForm}>
          <h1>LOGIN</h1>
          <div className="form-fields">
            <div>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="firstname" required
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="lastname" required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="text" id="email" name="email" placeholder="Email" required />
            </div>

            <div>
              <label htmlFor="password" className="content1">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password" required
              />
            </div>

            <div>
              <button type="submit" className="button-yellow content3">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
