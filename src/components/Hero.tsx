import type { ReactElement } from "react";

interface HeroProps {
  title: String;
  subTitle: String;
}

export default function Hero({
  title,
  subTitle,
}: HeroProps): ReactElement | null {
  return (
    <main>
      <div className="card">
        <h1>{title}</h1>
        <p>{subTitle}</p>
        <button className="btn">Book a ticket</button>
      </div>
    </main>
  );
}
