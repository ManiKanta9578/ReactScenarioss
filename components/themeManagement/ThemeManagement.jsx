import React, { useContext } from 'react';
import MyContext from '../../contextAPI/MyContext';
import styles from '../../styles/ThemeManagement.module.css';

const ThemeManagement = () => {
  const { theme, toggleTheme } = useContext(MyContext);

  return (
    <div className={styles.container}>
      <h2>Theme Management</h2>
      <p>This is an example of theme management using the Context API.</p>
      <button className={styles.button} onClick={toggleTheme}>
        {theme['--background-color'] === '#000000' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      </button>
    </div>
  );
};

export default ThemeManagement;
