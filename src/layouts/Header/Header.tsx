// import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom'; // Import Link

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link to="/">home</Link></li>
          <li className={styles.navItem}><Link to="/projects">projects</Link></li>
          <li className={styles.navItem}><Link to="/blogs">blogs</Link></li>
          <li className={styles.navItem}><Link to="/reading-list">reading list</Link></li>
          <li className={styles.navItem}><Link to="/resume"> my resume</Link></li>
          <li className={styles.navItem}><Link to="/contact">contact me</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;