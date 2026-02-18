import { useState } from "react";
import Header from "../src/components/Header/Header.jsx";
import styles from "./app.module.css";
import Hero from "./components/Hero/Hero";
import Information from "./components/Information/Information.jsx";
import DarkVeil from "./components/Hero/DarkVeil";
import SpeakItalian from "./components/SpeakItalian/SpeakItalian";
import Courses from "./components/Courses/Courses.jsx";
import School from "./components/School/School.jsx";

function App() {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <Hero />
        <Information />
        <SpeakItalian />
        <Courses />
        <School />
      </div>
    </>
  );
}

export default App;
