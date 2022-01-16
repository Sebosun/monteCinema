import { useRef } from "react";
import "./App.scss";
import Booking from "./components/Booking";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Movies from "./components/Movies";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  // Workaround for Firefox.
  // It wouldn't center if the focused thing was an input,
  // but would if it's a div
  const executeFocus = async () => {
    divRef.current!.scrollIntoView();
    await new Promise((resolve) => setTimeout(resolve, 600));
    inputRef.current!.focus();
  };

  return (
    <div className="App">
      <Header />
      <Hero
        title="Welcome to the best cinema in Monterail"
        subTitle="Best movies, best experiences, best people. An all that doesn't exist. Yikes."
        executeScroll={executeFocus}
      />
      <Movies />
      <div ref={divRef}>
        <Booking ref={inputRef} />
      </div>
    </div>
  );
}

export default App;
