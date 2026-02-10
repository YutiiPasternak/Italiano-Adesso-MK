import { useState } from "react";
import Logo from "../../assets/logo.svg?react";
import css from "./Header.module.css";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={css.header}>
      <div className={css.container}>
        <div className={css.logo}>
          <Logo className={css.imeg} width="80" height="80" />
          <span className={css.companyName}>Italiano-Adesso-MK</span>
        </div>

        {/* NAV */}
        <nav className={`${css.nav} ${open ? css.open : ""}`}>
          <a href="/">Курси</a>
          <a href="/">Відгуки</a>
          <a href="/">Про школу</a>
        </nav>

        {/* BURGER */}
        <button
          className={css.burger}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>
    </header>
  );
}
