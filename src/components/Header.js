import React from "react";
import "./Header.css";
import { Link } from "@reach/router";
import logo from "../assets/instagram_logo.png";
import Nav from "./Nav.js";

function Header() {
  return (
    <div className="Instagram-header">
      <Link to="/">
        <img src={logo} alt={"Header Logo Instagram"}></img>
      </Link>
      <input id="searchbar" type="text" placeholder="Search..."></input>
      <Nav></Nav>
    </div>
  );
}

export default Header;
