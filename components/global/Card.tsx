import Image from 'next/image';
import { Result } from '@/utils/types';
import styles from './Card.module.css';

function Card({ data }: { data?: Result }) {
  return (
    <figure className={styles.figure}>
      <div className={styles.imageContainer}>
        <Image
          src={data?.image || ''}
          alt='animal image'
          width={300}
          height={300}
          className={styles.image}
        />
      </div>
      <figcaption className={styles.figcaption}>
        <p className={styles.url}>{data?.url}</p>
        <h2 className={styles.title}>{data?.title}</h2>
        <p className={styles.description}>{data?.description}</p>
      </figcaption>
    </figure>
  );
}

export default Card;
