import React from 'react';
import styles from './Header.module.css'; // Import CSS module

function Header() {
  return (
    <header className={styles.header}>
      <h1>Welcome to Abe Garage</h1>
    </header>
  );
}

export default Header;
