import styles from './Button.module.css';

function Button({ title }: { title: string }) {
  return (
    <button type='submit' className={styles.button}>
      {title}
    </button>
  );
}

export default Button;
