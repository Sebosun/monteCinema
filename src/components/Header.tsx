import type { ReactElement } from "react";
import "./Header.scss";
import logo from "../../public/logo.svg";

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
            <button className="header__list__register">Register</button>
          </li>
          <li>
            <button>Login</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
