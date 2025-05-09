import React from "react";
import "./login_form.css";
import image from '../../../../assets/mail.jpg'

export default function LoginForm() {
  const icon = (
    <svg viewBox="0 0 512 512">
      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
    </svg>
  )
  return (
    <div className="login-container">
      <form className="login-form">
        <img src={image} alt="Login Logo" className="login-logo" />
        <h2>Welcome back</h2>

        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>

        <label>
          Password
          <input type="password" placeholder="••••••••" />
        </label>

        <button>Sign In</button>

        <div className="login-footer">
          <span role="link" aria-disabled="true">
            Forgot password?
          </span>
          {/* <a href="#NONE">Forgot password?</a> */}
          <span>•</span>
          <span role="link" aria-disabled="true">
          Create account
          </span>
          {/* <a href="#NONE">Create account</a> */}
        </div>
      </form>
    </div>
  );
}
