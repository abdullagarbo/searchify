import Image from 'next/image';
import { Result } from '@/utils/types';
import styles from './Card.module.css';

function Card({ data }: { data?: Result }) {
  return (
    <figure className={styles.figure}>
      <Image
        src={data?.image || ''}
        alt='animal image'
        width={300}
        height={300}
      />
      <figcaption>
        <p>{data?.url}</p>
        <h2>{data?.title}</h2>
        <p>{data?.description}</p>
      </figcaption>
    </figure>
  );
}

export default Card;
