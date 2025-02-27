
import styles from './Header.module.css';

function Header(){
    return(
       <header className ={styles.header}>
        <nav className={styles.nav}>
            <ul className={styles.navList}>
            <li className={styles.navItem}><a href="/">home</a></li>
          <li className={styles.navItem}><a href="/projects">projects</a></li>
          <li className={styles.navItem}><a href="/blogs">blogs</a></li>
          <li className={styles.navItem}><a href="/reading-list">reading list</a></li>
          <li className={styles.navItem}><a href="/resume"> my resume</a></li>
          <li className={styles.navItem}><a href="/contact">contact me</a></li>
            </ul>
        </nav>
       </header>
    );
}

export default Header;