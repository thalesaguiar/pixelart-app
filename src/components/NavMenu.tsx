import styles from "../styles/components/NavMenu.module.css";
import React from "react";

export default function NavMenu() {
  return (
    <div className={styles.container}>
      <span>
        <img src="./logox.jpg" alt="logomarca" className={styles.logo} />
      </span>
      <span className={styles.menu}>
        <a href="#"> Inicio </a>
        <a href="#"> Sobre </a>
        <a href="#"> Contato </a>
        <a href="#"> Apoie </a>
      </span>
    </div>
  );
}
