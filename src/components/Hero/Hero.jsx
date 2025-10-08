import React from "react";
import DarkVeil from "./DarkVeil";
import css from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <DarkVeil />
        <div className={css.content}>
          <h1 className={css.title}>Італійська зараз - Заговори за 3 місяці</h1>

          <div className={css.text}>
            Курси онлайн італійської мови для: роботи, життя, отримання
            громадянства та вступи в навчальні заклади.
          </div>
          <div className={css.wrapperButton}>
            <button className={css.buttonHero}>Курси</button>
            <button className={css.buttonHero}>Зв'язатися</button>
          </div>
        </div>
      </div>
    </section>
  );
}
