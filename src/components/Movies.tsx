import type { ReactElement } from "react";
import "./Movies.scss";
import MovieCard from "./MovieCard";
import PredatorImage from "../../public/predator.png";
import CommandoImage from "../../public/commando.png";
import TerminatorImage from "../../public/terminator.png";

export default function Movies(): ReactElement | null {
  return (
    <div className="movies">
      <div className="movies__menu">
        <div className="movies__menu__soon text_full">Soon in the cinema</div>
        <div className="movies__menu__soon text_short">Soon</div>
        <div className="movies__menu__all">See all</div>
      </div>
      <div className="movies__wrapper">
        <MovieCard
          title="Predator"
          text="A team of commandos on a mission in a Central American jungle find themselves hunted by an extraterrestrial warrior."
          image={PredatorImage}
        />
        <MovieCard
          title="Commando"
          text="A retired Special Forces colonel tries to save his daughter, who was abducted by his former subordinate."
          image={CommandoImage}
        />
        <MovieCard
          title="Terminator 2"
          text="A team of commandos on a mission in a Central American jungle find themselves hunted by an extraterrestrial warrior."
          image={TerminatorImage}
        />
      </div>
    </div>
  );
}
