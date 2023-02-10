import React from "react";
import "./App.css";
import { Header } from "./header/Header";
import { Main } from "./main/Main";
import { Skills } from "./skills/Skills";
import { Projects } from "./projects/Projects";
import { Offers } from "./offers/Offers";
import { Contacts } from "./contacts/Contacts";
import { Footer } from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Offers />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
