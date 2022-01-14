import { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MovieCard from "./components/MovieCard";
import Movies from "./components/Movies";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero
        title="Welcome to the best cinema in Monterail"
        subTitle="Best movies, best experiences, best people. An all that doesn't exist. Yikes."
      />
      <Movies />
    </div>
  );
}

export default App;
