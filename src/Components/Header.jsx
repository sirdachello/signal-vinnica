import logo from "../Assets/Images/Logo.png";
import Links from "./Links";
import styles from "../Styles/Header.module.css";
import { useEffect } from "react";


const observer = new IntersectionObserver(([entry]) => {
    const navBar = document.getElementById('navBar');
  
    if(!entry.isIntersecting) {
      navBar.classList.add(styles.altNavbar); 
    } else {
      navBar.classList.remove(styles.altNavbar)
    }
  
})


export default function Header() {

  useEffect(() => {
    const header = document.getElementById(`header`);
    if(header) {
      observer.observe(header);
    }

    return () => { if(header) observer.unobserve(header);}
  }, [])

  return (
    <>
      <header id="header" className={styles.header}>
      <nav id="navBar" className={styles.headerNav}>
        <Links />
      </nav>
        <div className={styles.headerBrand}>
          <img src={logo} alt="Логотип компанії 'Сигнал'" />
          <h1>Дорога починається тут!</h1>
        </div>
      </header>
    </>
  );
}
