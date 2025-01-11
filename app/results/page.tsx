import { v4 as uuid } from 'uuid';
import ResultsItem from '@/components/ResultsItem';
import { Result } from '../../types';
import styles from './Results.module.css';

const searchResults: Result[] = [
  {
    title: 'Bonga shad',
    link: 'https://allene.org',
    description:
      'Dolores soluta ea voluptates occaecati labore molestias tempore perferendis voluptas. Voluptas quam sunt explicabo debitis perferendis consequatur asperiores sit. Quisquam qui expedita.',
  },
  {
    title: 'Pacific anchoveta',
    link: 'https://francesco.name',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'Common carp',
    link: 'https://elvera.org',
    description:
      'Voluptatibus rem omnis ut non eum consequatur sint ut voluptas. Eos tempore ut soluta voluptates voluptates dolore quas.',
  },
  {
    title: 'Yellow croaker',
    link: 'http://eldora.info',
    description:
      'Harum et fugiat fugit dolor dolor eligendi necessitatibus dolorum et. Et error earum nihil quae voluptate nam. Fuga non delectus eos dolorem. Ipsam blanditiis consequatur nulla ipsam consequatur id blanditiis. reprehenderit quo.',
  },
  {
    title: 'Silver carp',
    link: 'http://junius.net',
    description:
      'Voluptate dolor nihil perferendis repellendus quibusdam blanditiis. Voluptatem optio laudantium voluptate et fugiat velit et voluptas. Dolor deserunt aliquid harum. Et aliquam culpa. Consequatur earum repudiandae aperiam et non ut. Sequi sit est aliquid voluptas optio explicabo exercitationem qui est.',
  },
  {
    title: 'Araucanian herring',
    link: 'http://krstin.biz',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

function ResultsPage() {
  return (
    <main className={styles.searchResultsContainer}>
      <div className={styles.searchResults}>
        <ul>
          {searchResults.map((result) => (
            <ResultsItem key={uuid()} result={result} />
          ))}
        </ul>
      </div>
      <div className={styles.searchPreview}></div>
    </main>
  );
}

export default ResultsPage;
