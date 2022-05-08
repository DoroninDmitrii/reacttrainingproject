import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import Mybutton from "../button/Mybutton";

const Navbar = () => {

const { state, dispatch } = useContext(AuthContext)

const logout = () => {
  dispatch({ type: "LOGOUT", payload: true})
  localStorage.removeItem('auth')
}

  return (
    <div className="navbar">
      <Mybutton onClick={logout}>Logout</Mybutton>
      <div className="navbar__links">
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
};

export default Navbar;
