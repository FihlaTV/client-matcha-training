import React from 'react';

const Login = () => (
  <div className="Login">
    <h1>Log In</h1>
    <form action="/" method="post">
      <div className="field-wrap">
        <input type="text" required autoComplete="off" placeholder="User Name" />
      </div>
      <div className="field-wrap">
        <input type="password" required autoComplete="off" placeholder="Password" />
      </div>
      <button type="submit" className="button button-block">Log In</button>
    </form>
  </div>
);

export default Login;
