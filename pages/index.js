// pages/index.js

import Link from 'next/link';
import styles from '../styles/home.module.css';

function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>React Scenarios</h1>
      <nav>
        <ol className={styles.listContainer}>
          <li className={styles.listItem}>
            <Link href="/dynamicHtml" className={styles.link}>Display Dynamic HTML</Link>
          </li>
        </ol>
      </nav>
    </main>
  );
}

export default Home;
