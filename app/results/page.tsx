import { v4 as uuid } from 'uuid';
import ResultsItem from '@/components/ResultsItem';
import data from '@/utils/data';
import styles from './Results.module.css';

function ResultsPage() {
  return (
    <main className={styles.searchResultsContainer}>
      <div className={styles.searchResults}>
        <ul>
          {data.map((result) => (
            <ResultsItem key={uuid()} result={result} />
          ))}
        </ul>
      </div>
      <div className={styles.searchPreview}></div>
    </main>
  );
}

export default ResultsPage;
