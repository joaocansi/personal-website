import Link from 'next/link';

import styles from '../styles/pages/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <div>
        <h1>João Guilherme</h1>
        <h2>Web Developer</h2>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/about-me">About Me</Link>
          </li>
          <li>
            <Link href="/portifolio">Portifolio</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
} 

export default Home;
