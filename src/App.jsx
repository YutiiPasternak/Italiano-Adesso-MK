import { useState } from "react";
import Header from "../src/components/Header/Header";
import styles from "./app.module.css";
import Hero from "./components/Hero/Hero";
import Information from "./components/information/information";
import DarkVeil from "./components/Hero/DarkVeil";
import SpeakItalian from "./components/SpeakItalian/SpeakItalian";
import Courses from "./components/Courses/Courses.jsx";

function App() {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <Hero />
        <Information />
        <SpeakItalian />
        <Courses />
      </div>
    </>
  );
}

export default App;
