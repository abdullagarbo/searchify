import styles from './Results.module.css';

function ResultsContainer({ children }: { children: React.ReactNode }) {
  return <main className={styles.searchResultsContainer}>{children}</main>;
}

export default ResultsContainer;
