import logo from "../../assets/logo.svg";
import css from "./Header.module.css";
export default function Header() {
  return (
    <>
      <header className={css.header}>
        <div className={css.container}>
          <img
            className={css.imeg}
            src={logo}
            alt="Logo"
            width="80"
            height="80"
          />

          <nav>
            <ul>
              <li>Відгуки</li>
              <li>Відгуки</li>
              <li>Про школу</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
