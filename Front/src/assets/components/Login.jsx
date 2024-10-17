import React from "react";
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="input-box">
            <input type="email" placeholder="Ingresa Correo" required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Ingresa Contraseña" required />
          </div>
          <button type="submit" className="login-btn">LOGIN</button>
        </form>
        <p className="signup-text">Sign Up</p>
      </div>
    </div>
  );
};

export default LoginForm;