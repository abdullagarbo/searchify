import styles from './Results.module.css';

function ResultsContainer({
  leftSide,
  rightSide,
}: {
  leftSide: React.ReactNode;
  rightSide?: React.ReactNode;
}) {
  return (
    <main className={styles.searchResultsContainer}>
      <div className={styles.searchResults}>{leftSide}</div>
      <div className={styles.searchPreview}>{rightSide}</div>
    </main>
  );
}

export default ResultsContainer;
