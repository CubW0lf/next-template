import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a>Accueil</a>
      </Link>
      <Link href="/">
        <a>Connexion</a>
      </Link>
      <Link href="/">
        <a>Inscription</a>
      </Link>
    </nav>
  );
};

export default Navbar;
