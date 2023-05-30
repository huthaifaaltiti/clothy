// react
import React from "react";
// react-router-dom
import { NavLink, Link } from "react-router-dom";

// component
import {ReactComponent as CrownLogo} from "../../assets/crown.svg";

// styles
import "./navbar.styles.scss";

export default function NavBar() {
  return (
    <div className="navbar-body">
      <div className="navbar-cont">
        <div className="logo-cont">
          <Link to="/">
            <CrownLogo />
          </Link>
        </div>

        <div className="navbar-menu-cont">
          <ul>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/sign-in">Sign In</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
