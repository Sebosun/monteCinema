import type { ReactElement } from "react";
import "./Hero.scss";
import image from "../../public/unsplash-AtPWnYNDJnM.jpg";

interface HeroProps {
  title: String;
  subTitle: String;
  executeScroll: () => void;
}

export default function Hero({
  title,
  subTitle,
  executeScroll,
}: HeroProps): ReactElement | null {
  return (
    <main>
      <div className="card">
        <h1>{title}</h1>
        <p>{subTitle}</p>
        <button onClick={executeScroll} className="btn">
          Book a ticket
        </button>
      </div>
      <div className="hero"></div>
    </main>
  );
}
