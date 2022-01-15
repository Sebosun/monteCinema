import type { ReactElement } from "react";
import "./Header.scss";
import logo from "/logo.svg";

export default function Header(): ReactElement | null {
  return (
    <header className="header">
      <img src={logo} alt="monte cinema" />
      <nav>
        <ul className="header__list">
          <li className="header__burger">
            <span className="span"></span>
            <span className="span"></span>
            <span className="span"></span>
          </li>
          <li>
            <button className="reg">Register</button>
          </li>
          <li>
            <button className="btn">Login</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
