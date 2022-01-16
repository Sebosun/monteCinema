import type { ReactElement } from "react";

interface CardTypes {
  title: string;
  image: string;
  text: string;
}

export default function MovieCard({
  title,
  image,
  text,
}: CardTypes): ReactElement | null {
  return (
    <div className="movies__card">
      <h1>{title}</h1>
      <div className="movies__image">
        <img src={image} alt={title} />
      </div>
      <p>{text}</p>
    </div>
  );
}
