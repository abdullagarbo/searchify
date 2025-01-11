import styles from './Input.module.css';

interface InputProps {
  type?: string;

  placeholder?: string;

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  value?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  onChange,
  value,
}: {
  placeholder?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={styles.input}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
