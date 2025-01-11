import Image from 'next/image';
import avatar from '@/public/avatar.png';
import { TbGridDots } from 'react-icons/tb';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <p>Agile Content Frontend test</p>
      <div className={styles.userSection}>
        <TbGridDots size={30} />
        <Image
          src={avatar}
          alt='User Avatar'
          width={30}
          height={30}
          className={styles.avatar}
        />
      </div>
    </header>
  );
}

export default Header;
