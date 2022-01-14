import type { ReactElement } from "react";
import logo from "../../public/logo.svg";

export default function Header(): ReactElement | null {
  return (
    <header className="header">
      <img src={logo} alt="monte cinema" />
      <nav>
        <ul>
          <li>
            <span className="span"></span>
            <span className="span"></span>
            <span className="span"></span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
