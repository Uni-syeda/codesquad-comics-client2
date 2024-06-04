import React from "react";
function Login({ user, setUser }) {
  const loginForm = (e) => {
    e.preventDefault();
    console.log("this method ran");
    console.log(e.email.value);
    console.log(e.password.value);
  };
  return (
    <div>
      <div className="content-box6">
        <form action="#" onSubmit={loginForm}>
          <h1>LOGIN</h1>
          <div className="form-fields">
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="content1">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
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

export default Login;

// const Login = () => {
//     const { setUser } = React.useContext(UserContext); // Destructure setUser

//     const handleSubmit = (e) => {
//       e.preventDefault();

// Access and print form input values
// const email = e.target.email.value;
// const password = e.target.password.value;
// console.log(`Email: ${email}`);
// console.log(`Password: ${password}`);
