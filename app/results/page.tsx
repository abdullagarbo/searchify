import { v4 as uuid } from 'uuid';
import { searchData } from '@/utils/data';
import ResultsContainer from '@/components/Results/ResultsContainer';
import ResultsItem from '@/components/Results/ResultsItem';
import ResultsNotFound from '@/components/Results/ResultsNotFound';

async function ResultsPage({
  searchParams,
}: {
  searchParams: { search?: string };
}) {
  const { search } = await searchParams;
  const keyword = search || '';
  const animals = searchData(keyword);

  if (animals.length === 0) {
    return (
      <ResultsContainer
        leftSide={
          <ResultsNotFound
            keyword={keyword}
            title='No results found for'
            description='insect, fish, horse, crocodile, bear, cetacean, cow, lion,
              rabbit, cat, snake, dog, bird.'
          />
        }
      />
    );
  }

  // if (keyword === '') {
  //   return (
  //     <ResultsContainer
  //       leftSide={
  //         <ResultsNotFound
  //           description='insect, fish, horse, crocodile, bear, cetacean, cow, lion,
  //           rabbit, cat, snake, dog, bird.'
  //         />
  //       }
  //     />
  //   );
  // }

  return (
    <ResultsContainer
      leftSide={
        <ul>
          {animals.map((result) => (
            <ResultsItem key={uuid()} result={result} />
          ))}
        </ul>
      }
      rightSide={<p>Preview</p>}
    />
  );
}

export default ResultsPage;
