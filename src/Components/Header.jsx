import logo from "../Assets/Images/Logo.png";
import Links from "./Links";
import styles from "../Styles/Header.module.css";
import { useEffect, useRef } from "react";

const observer = new IntersectionObserver(([entry]) => {
  const navBar = entry.target.closest('header').querySelector(`#navBar`);
  
  if (!entry.isIntersecting) {
    navBar.classList.add(styles.altNavbar);
  } else {
    navBar.classList.remove(styles.altNavbar);
  }
});

export default function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    if (header) {
      observer.observe(header);
    }

    return () => {
      if (header) observer.unobserve(header);
    };
  }, []);

  return (
    <>
      <header id="header" ref={headerRef} className={styles.header}>
        <nav id="navBar" className={styles.headerNav}>
          <Links />
        </nav>
        <div className={styles.headerBrand}>
          <img src={logo} width={200} alt="Логотип компанії 'Сигнал'" />
          <h1>Дорога починається тут!</h1>
        </div>
      </header>
    </>
  );
}
