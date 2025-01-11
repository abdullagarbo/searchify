import Image from 'next/image';
import googleLogo from '@/public/google-logo.png';
import Input from '@/components/Input';
import Button from '@/components/Button';
import styles from './Home.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.mainSection}>
        <Image src={googleLogo} alt='Google Logo' />
      </section>
      <section>
        <form className={styles.form}>
          <Input placeholder='Search animal' />
          <div className={styles.formDiv}>
            <Button title='Search' />
          </div>
        </form>
      </section>
    </main>
  );
}
