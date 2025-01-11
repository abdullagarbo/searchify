'use client';

import { useFormStatus } from 'react-dom';
import styles from './Button.module.css';

function Button({ title }: { title: string }) {
  const { pending } = useFormStatus();

  return (
    <button type='submit' className={styles.button} disabled={pending}>
      {pending ? 'Wait...' : title}
    </button>
  );
}

export default Button;
