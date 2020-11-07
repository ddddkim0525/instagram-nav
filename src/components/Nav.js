import { ReactComponent as Home } from "../assets/home.svg";
import { ReactComponent as Message } from "../assets/message.svg";
import { ReactComponent as Explore } from "../assets/explore.svg";
import { ReactComponent as Activity } from "../assets/activity.svg";
import { ReactComponent as Profile } from "../assets/profile.svg";
import { Router, Link } from "@reach/router";

function Nav() {
  return (
    <nav clasName="navigation-ui">
      <Link to="/">
        <Home />
      </Link>
      <Link to="/message">
        <Message />
      </Link>
      <Link to="/explore">
        <Explore />
      </Link>
      <Link to="/">
        <Activity />
      </Link>
      <Link to="/">
        <Profile />
      </Link>
    </nav>
  );
}

export default Nav;
