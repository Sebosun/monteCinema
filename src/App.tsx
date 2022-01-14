import { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero
        title="Welcome to the best cinema in Monterail"
        subTitle="Best movies, best experiences, best people. An all that doesn't exist. Yikes."
      />
    </div>
  );
}

export default App;
