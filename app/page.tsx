import Image from 'next/image';
import googleLogo from '@/public/google-logo.png';
import styles from './Home.module.css';

export default function Home() {
  return (
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
  );
}
