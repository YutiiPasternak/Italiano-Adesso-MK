import css from "./Information.module.css";

export default function Information() {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.title}>Для кого</h2>
        <div className={css.wrapper}>
          <div className={css.box}>
            <h3 className={css.subtitle}>Терміново</h3>
            <p className={css.text}>
              Для тих кому потрібно вивчити італійську мову терміново, і не має
              часу.
            </p>
          </div>
          <div className={css.box}>
            <h3 className={css.subtitle}>Громадянство</h3>
            <p className={css.text}>
              Для тих хто хоче отримати італійське громадянство
            </p>
          </div>
          <div className={css.box}>
            <h3 className={css.subtitle}>Диплом</h3>
            <p className={css.text}>
              Для тих кому потрібна підготовка для вступу в італійський
              навчальний заклад
            </p>
          </div>
        </div>
        <div className={css.wrapperButton}>
          <button className={css.button}>Курси</button>
        </div>
      </div>
    </section>
  );
}
