import Link from "next/link";
import { useState } from "react";
import styles from '../styles/components/Header.module.css';

interface Page {
  page: string;
}

const Header: React.FC<Page> = ({ page }) => {
  const [hamburger, setHamburger] = useState(false);
  return (
    <header className={styles.headerContainer}>
        <div>
          <div>
            <div>
              <h1>João Guilherme</h1>
              <h2>web developer</h2>
            </div>
            {hamburger ? (
              <i onClick={() => setHamburger(!hamburger)} className="fas fa-times"></i>
              ) : (
              <i onClick={() => setHamburger(!hamburger)} className="fas fa-bars"></i>
            )}
          </div>
          <nav className={hamburger ? styles.navbarOpened : null}>
            <ul>
              <li className={page === 'about-me' ? styles.linkActive : null}>
                <Link href="/about-me">About Me</Link>
              </li>
              <li className={page === 'portifolio' ? styles.linkActive : null}>
                <Link href="/portifolio">Portifolio</Link>
              </li>
              <li className={page === 'contact' ? styles.linkActive : null}>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
    </header>
  )
}

export default Header;