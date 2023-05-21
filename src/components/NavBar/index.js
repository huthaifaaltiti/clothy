// react
import React from "react";
import { Link } from "react-router-dom";

import {ReactComponent as CrownLogo } from "../../assets/svgs/crown.svg";

// styles, icons
import "./navbar.styles.scss";
import { BsCart } from "react-icons/bs";

export default function NavBar() {
  return (
    <div className="navbar-body">
      <div className="navbar-cont">
        <div className="logo-cont">
          <Link to="/">
           <CrownLogo className="logo"/>
          </Link>
        </div>

        <div className="navbar-menu-cont">
          <ul>
            <li>
              <Link to="shop">Shop</Link>
            </li>
            <li>Connect</li>
            <li>Sign In</li>
            <li>
              <BsCart />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
