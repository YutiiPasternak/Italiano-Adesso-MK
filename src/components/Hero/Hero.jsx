import React from "react";
import DarkVeil from "./DarkVeil";
import css from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <DarkVeil />
        <div className={css.content}>
          <h1 className={css.title}>Італійська зараз</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
        </div>
      </div>
    </section>
  );
}
