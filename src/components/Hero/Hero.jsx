import React from "react";

import css from "./Hero.module.css";
import Maria from "../../assets/maria.png";

export default function Hero() {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.content}>
          <div className={css.text}>
            <h1 className={css.title}>
              <span>Italiano Adesso MK</span> <br />
              <span>Італійська зараз - Заговори за 3 місяці</span>
            </h1>
            <img
              className={css.maria}
              src={Maria}
              alt={Maria}
              height={400}
              width={400}
            />
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
