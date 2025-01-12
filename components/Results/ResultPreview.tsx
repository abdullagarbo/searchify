import { Result } from '@/utils/types';
import Card from '../global/Card';
import styles from './ResultPreview.module.css';

function ResultPreview({ data }: { data?: Result }) {
  return (
    <div className={styles.resultPreview}>
      <Card data={data} />
    </div>
  );
}

export default ResultPreview;
