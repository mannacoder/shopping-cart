import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";

import "./Auth.css";

const Auth = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };
  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="john@email.com" type="text" name="id" id="id" />
        <input
          placeholder="******"
          type="password"
          name="password"
          id="password"
        />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
