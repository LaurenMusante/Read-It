import React from "react";
import { Link } from "react-router-dom";

function Header(){
  return (
    <div>
      <h1>Read-It</h1>
      <Link to="/">Home</Link> | <Link to="/newpost"> Post</Link>
    </div>
  );
}

export default Header;