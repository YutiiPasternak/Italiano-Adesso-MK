import Logo from "../../assets/logo.svg?react";
import css from "./Header.module.css";

export default function Header() {
  return (
    <>
      <header className={css.header}>
        <div className={css.container}>
          <div className={css.logo}>
            <Logo className={css.imeg} width="120" height="120" />
            <span className={css.companyName}>Italiano-Adesso-MK</span>
          </div>
          <div className={css.contNav}>
            <nav className={css.nav}>
              <a href="/">Курси</a>
              <a href="/">Відгуки</a>
              <a href="/">Про школу</a>
            </nav>
          </div>

          <button className={css.button}>Click</button>
        </div>
      </header>
    </>
  );
}
