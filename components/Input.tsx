import styles from './Input.module.css';

function Input({ placeholder = 'Search' }: { placeholder?: string }) {
  return (
    <input type='text' placeholder={placeholder} className={styles.input} />
  );
}

export default Input;
