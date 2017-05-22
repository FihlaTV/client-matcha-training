import React from 'react';

const Register = () => (
  <div className="Signup">
    <h1>Sign Up</h1>
    <form action="/" method="post">
      <div className="top-row">
        <div className="field-wrap">
          <input type="text" required autoComplete="off" placeholder="First Name" />
        </div>
        <div className="field-wrap">
          <input type="text" required autoComplete="off" placeholder="Last Name" />
        </div>
      </div>
      <div className="field-wrap">
        <input type="text" required autoComplete="off" placeholder="User Name" />
      </div>
      <div className="field-wrap">
        <input type="password" required autoComplete="off" placeholder="Password" />
      </div>
      <div className="field-wrap">
        <input type="password" required autoComplete="off" placeholder="Repeat Password" />
      </div>
      <button type="submit" className="button button-block">Get Started</button>
    </form>
  </div>
);

export default Register;
