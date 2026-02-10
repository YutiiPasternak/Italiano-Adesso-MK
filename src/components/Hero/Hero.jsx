import React from "react";

import css from "./Hero.module.css";
import Maria from "../../assets/maria.png";

export default function Hero() {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.content}>
          <h1 className={css.title}>
            Курси Італійської мови онлайн в Italiano Adesso MK
            <br />
          </h1>
          <div className={css.text}>
            <span> Отримай програму під свої запити та терміни</span>
          </div>
          <div className={css.text}>
            <span> Познайомся із викладачем з підготовкою рівнем NASA</span>
          </div>
          <div className={css.text}>
            <span> Вивчайся за європейськими стандартами CEFR</span>
          </div>
          <img
            className={css.maria}
            src={Maria}
            alt={Maria}
            height={170}
            width={170}
          />
          <div className={css.wrapperButton}>
            <button className={css.buttonHero}>Курси</button>
            <button className={css.buttonHero}>Зв'язатися</button>
          </div>
        </div>
      </div>
    </section>
  );
}
