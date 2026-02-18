import css from "./SpeakItalian.module.css";

export default function SpeakItalian() {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.title}>Чому ви ще не говорите Італійською</h2>
        <ul>
          <li>Не можете навчатися стабільно. Починаєте але швидко кидаєте</li>
          <li>
            Не має мотивації, не має з ким практикувати, не має результату
          </li>
          <li>Стає нудно підручники без життя, суха теорія</li>
          <li>Топчетеся на одному місці. Роками рівень не змінюється</li>
        </ul>
        <p className={css.text}>
          Настав момент змінити це - без нудних правил, без років очікування, з
          реальною системою та підтримкою.
        </p>
      </div>
    </section>
  );
}
