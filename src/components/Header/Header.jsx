import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="nav">
      <Link to="/"> Home </Link>
      <Link to="/statistics"> Statistics </Link>
      <Link to="/applied_jobs"> Applied Jobs </Link>
      <Link to="/blogs"> Blogs </Link>
    </div>
  );
};

export default Header;
