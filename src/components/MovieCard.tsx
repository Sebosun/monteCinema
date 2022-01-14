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
      <img src={image} alt={title} />
      <p>{text}</p>
    </div>
  );
}
