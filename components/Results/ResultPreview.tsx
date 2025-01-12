import { Result } from '@/utils/types';
import styles from './ResultPreview.module.css';

function ResultPreview({ data }: { data?: Result }) {
  return (
    <div className={styles.searchPreview}>
      <p>Preview</p>
      <p>{data?.id}</p>
    </div>
  );
}

export default ResultPreview;
