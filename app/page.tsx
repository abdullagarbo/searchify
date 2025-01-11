import Image from 'next/image';
import googleLogo from '../public/google-logo.png';
import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p>Agile Content Frontend test</p>
        <p>Version 0.1.0</p>
      </header>
      <main className={styles.container}>
        <section className={styles.mainSection}>
          <Image src={googleLogo} alt='Google Logo' />
        </section>
        <section>
          <form className={styles.form}>
            <input
              type='text'
              placeholder='Search Google or type a URL'
              className={styles.formInput}
            />
            <div className={styles.formDiv}>
              <button type='submit' className={styles.formButton}>
                Search
              </button>
            </div>
          </form>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>@ Google 2024</p>
        <p>Version 0.1.0</p>
      </footer>
    </div>
  );
}
