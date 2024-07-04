// pages/index.js

import Link from 'next/link';
import styles from '../styles/home.module.css';

const routes = [
  { href: "/dynamicHtml", title: "Display Dynamic HTML" },
  { href: "/parentChildMethodCall", title: "How to call parent component method from child component in reactCall" },
  { href: "/accessDomElement", title: "How do you access the dom element in react" },
  { href: "/arrayOfObjectsDropdown", title: "How to bind array/array of objects to dropdown in react" },
  { href: "/lazyLoading", title: "Create a lazy loaded component in react" },
  { href: "/arrayOfObjectsRadioBtn", title: "Bind array/array of objects to radio button in react" },
  { href: "/displayObjectsAndKeys", title: "Display keys and values of objects in a loop in react" },
  { href: "/methodOnRerender", title: "How to call a method on every rerender of a component in react" },
  { href: "/searchFilter", title: "Create a search textbox filter in react" },
];

function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>React Scenarios</h1>
      <nav>
        <ol className={styles.listContainer}>
          {routes.map((route) => (
            <li className={styles.listItem} key={route}>
              <Link href={route.href} className={styles.link}>{route.title}</Link>
            </li>
          ))}
          {/* <li className={styles.listItem}>
            <Link href="/parentChildMethodCall" className={styles.link}>How to call parent component method from child component in reactCall</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/accessDomElement" className={styles.link}>How do you access the dom element in react</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/arrayOfObjectsDropdown" className={styles.link}>How to bind array/array of objects to dropdown in react</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/lazyLoading" className={styles.link}>Create a lazy loaded component in react</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/arrayOfObjectsRadioBtn" className={styles.link}>Bind array/array of objects to radio button in react</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/displayObjectsAndKeys" className={styles.link}>Display keys and values of objects in a loop in react</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/methodOnRerender" className={styles.link}>How to call a method on every rerender of a component in react </Link>
          </li> */}
        </ol>
      </nav>
    </main>
  );
}

export default Home;
