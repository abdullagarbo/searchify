'use client';

import { useFormStatus } from 'react-dom';
import styles from './Button.module.css';

function Button({ title, disabled }: { title: string; disabled: boolean }) {
  const { pending } = useFormStatus();
  return (
    <button type='submit' className={styles.button} disabled={disabled}>
      {pending ? 'Wait...' : title}
    </button>
  );
}

export default Button;
