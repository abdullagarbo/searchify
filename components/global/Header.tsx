import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <p>Agile Content Frontend test</p>
      <p>Version 0.1.0</p>
    </header>
  );
}

export default Header;
