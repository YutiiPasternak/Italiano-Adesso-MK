import css from "./Courses.module.css";

export default function Courses() {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.title}>Оберіть Курс</h2>
        <p className={css.text}>
          Італійська зараз - швидкий результат із задоволенням
        </p>
        <div className={css.wrapper}>
          <div className={css.box}>
            <h3 className={css.subtitle}>Базовий</h3>
            <p className={css.text}>
              Італійська з нуля до роботи 20 відео уроків
            </p>
          </div>
          <div className={css.box}>
            <h3 className={css.subtitle}>Класичний</h3>
            <p className={css.text}>
              Для тих хто хоче отримати італійське громадянство
            </p>
          </div>
          <div className={css.box}>
            <h3 className={css.subtitle}>Інтенсив</h3>
            <p className={css.text}>
              Для тих кому потрібна підготовка для вступу в італійський
              навчальний заклад
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
