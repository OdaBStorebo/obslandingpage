import React, { useState } from "react";
import styles from '../styles/NavBar.module.css';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.navBar}>
      <div className={styles.dropdownContainer}>
        <Menu className={styles.menuIcon} onClick={toggleMenu} size={30}/>
        <div className={`${styles.dropdown} ${menuOpen ? styles.open : ''}`}>
          <a href="#">Om meg</a>
          <a href="#">Prosjekter</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;