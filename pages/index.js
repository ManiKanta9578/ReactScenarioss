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
          <li className={styles.listItem}>
            <Link href="/parentChildMethodCall" className={styles.link}>How to call parent component method from child component in reactCall</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/accessDomElement" className={styles.link}>How do you access the dom element in react</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/arrayOfObjectsDropdown" className={styles.link}>How to bind array/array of objects to dropdown in react</Link>
          </li>
        </ol>
      </nav>
    </main>
  );
}

export default Home;
