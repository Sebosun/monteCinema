import { useRef } from "react";
import "./App.scss";
import Booking from "./components/Booking";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Movies from "./components/Movies";

function App() {
  const myRef = useRef<HTMLInputElement>(null);

  const executeScroll = () => {
    myRef && myRef.current!.scrollIntoView();
    myRef.current!.focus();
  };

  return (
    <div className="App">
      <Header />
      <Hero
        title="Welcome to the best cinema in Monterail"
        subTitle="Best movies, best experiences, best people. An all that doesn't exist. Yikes."
        executeScroll={executeScroll}
      />
      <Movies />
      <Booking ref={myRef} />
    </div>
  );
}

export default App;
