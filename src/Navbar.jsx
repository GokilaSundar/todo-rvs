import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "end",
        gap: "20px",
        backgroundColor: "black",
        padding: "10px",
      }}
    >
      <div>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Todo
        </Link>
      </div>
      <div>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Profile Card
        </Link>
      </div>
      <div>
        <Link to="/gridview" style={{ color: "white", textDecoration: "none" }}>
          Grid Application
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
