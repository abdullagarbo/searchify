import { v4 as uuid } from 'uuid';
import ResultsItem from './ResultsItem';
import { Result } from '@/utils/types';
import styles from './ResultsList.module.css';

function ResultsList({
  data,
  preview,
}: {
  data: Result[];
  preview: (id: number) => void;
}) {
  return (
    <div className={styles.searchResults}>
      <ul>
        {data.map((item) => (
          <ResultsItem
            key={uuid()}
            result={item}
            preview={(id) => preview(id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default ResultsList;
