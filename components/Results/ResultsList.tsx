import { v4 as uuid } from 'uuid';
import ResultsItem from './ResultsItem';
import { Result } from '@/utils/types';
import styles from './ResultsList.module.css';

type ResultsListProps = {
  data: Result[];
};

function ResultsList({ data }: ResultsListProps) {
  return (
    <div className={styles.searchResults}>
      <ul>
        {data.map((item) => (
          <ResultsItem key={uuid()} result={item} />
        ))}
      </ul>
    </div>
  );
}

export default ResultsList;
