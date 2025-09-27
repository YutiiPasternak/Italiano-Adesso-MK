import { useState } from "react";
import Header from "../src/components/Header/Header";
import styles from "./app.module.css";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <h1>Hello new project </h1>
    </div>
  );
}

export default App;
