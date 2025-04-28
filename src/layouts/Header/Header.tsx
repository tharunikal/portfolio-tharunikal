// src/layouts/Header/Header.tsx

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

          {/* Open Resume in a new tab directly */}
          <li className={styles.navItem}>
            <a 
              href="/assets/Tharunika-L-Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              my resume
            </a>
          </li>

          
        </ul>
      </nav>
    </header>
  );
}

export default Header;
