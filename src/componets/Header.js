import React, { useState, useEffect } from 'react';

function Header() {
  // Initialize isDarkTheme with false to set light theme by default
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
  };

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
      // Add the 'light-theme' class by default
      document.body.classList.add('light-theme');
    }
  }, [isDarkTheme]);

  return (
    <header>
      <img src="images/logo.svg" alt="Logo" />
      <h1 className="main-head">SENDMAC FLEET</h1>
      <label htmlFor="theme-toggle" className="theme-switch">
        <input
          type="checkbox"
          id="theme-toggle"
          checked={isDarkTheme}
          onChange={toggleTheme}
        />
        <span className="slider round"></span>
      </label>
    </header>
  );
}

export default Header;
