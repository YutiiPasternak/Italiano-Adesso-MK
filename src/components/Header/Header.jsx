import logo from "../../assets/logo.svg";
import css from "./Header.module.css";
export default function Header() {
  return (
    <>
      <header className={css.header}>
        <div className={css.container}>
          <div className={css.logo}>
            <img
              className={css.imeg}
              src={logo}
              alt="Logo"
              width="80"
              height="80"
            />
          </div>
          <div className={css.contNav}>
            <nav className={css.nav}>
              <a href="/">Курси</a>
              <a href="/">Відгуки</a>
              <a href="/">Про школу</a>
            </nav>
          </div>
          <div>
            <button className={css.button}>Click</button>
          </div>
        </div>
      </header>
    </>
  );
}
