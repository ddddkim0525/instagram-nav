import "./App.css";
import { Router, Link } from "@reach/router";
import logo from "./assets/instagram_logo.png";
import Nav from "./components/Nav.js";

function App() {
  return (
    <div className="Instagram">
      <header className="Instagram-header">
        <Link to="/">
          <img src={logo} alt={"Header Logo Instagram"}></img>
        </Link>
        <input id="searchbar" type="text" placeholder="Search..."></input>
        <Nav></Nav>
      </header>
      <Router></Router>
    </div>
  );
}

export default App;
