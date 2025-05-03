import React from "react";
import "./login_form.css"; // suponiendo que luego quieras mover estilos afuera

export default function LoginForm() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Welcome back</h2>

        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>

        <label>
          Password
          <input type="password" placeholder="••••••••" />
        </label>

        <button >Sign In</button>

        <div className="login-footer">
          <a href="#">Forgot password?</a>
          <span>•</span>
          <a href="#">Create account</a>
        </div>
      </form>
    </div>
  );
}
