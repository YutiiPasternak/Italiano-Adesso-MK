import { useState } from "react";
import Header from "../src/components/Header/Header";
import styles from "./app.module.css";
import Hero from "./components/Hero/Hero";
import Information from "./components/information/information";
import DarkVeil from "./components/Hero/DarkVeil";
import SpeakItalian from "./components/SpeakItalian/SpeakItalian";

function App() {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <Hero />
        <Information />
        <SpeakItalian />
      </div>
    </>
  );
}

export default App;
