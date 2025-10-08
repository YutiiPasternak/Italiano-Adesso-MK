import { useState } from "react";
import Header from "../src/components/Header/Header";
import styles from "./app.module.css";
import Hero from "./components/Hero/Hero";
import Information from "./components/information/information";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <Information />
      <h1>Hello new project </h1>
    </div>
  );
}

export default App;
