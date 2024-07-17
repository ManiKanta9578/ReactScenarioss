import React, { useState } from 'react';
import MyContext from './MyContext';

const themes = {
  light: {
    '--background-color': '#ffffff',
    '--text-color': '#000000',
    '--button-background': '#007bff',
    '--button-text-color': '#ffffff',
    '--button-background-hover': '#0056b3',
    '--button-text-color-hover': '#ffffff'
  },
  dark: {
    '--background-color': '#000000',
    '--text-color': '#ffffff',
    '--button-background': '#6c757d',
    '--button-text-color': '#ffffff',
    '--button-background-hover': '#5a6268',
    '--button-text-color-hover': '#ffffff'
  }
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  return (
    <MyContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ ...theme, minHeight: '100vh', minWidth: '100vw' }}>
        {children}
      </div>
    </MyContext.Provider>
  );
};

export default ThemeProvider;
