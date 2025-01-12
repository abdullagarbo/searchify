'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ResultsContainer from '@/components/Results/ResultsContainer';
import ResultsNotFound from '@/components/Results/ResultsNotFound';
import ResultsList from '@/components/Results/ResultsList';
import ResultPreview from '@/components/Results/ResultPreview';
import LoadingContainer from '@/components/global/LoadingContainer';
import { Result } from '@/utils/types';
import { searchData } from '@/utils/data';

function ResultsPage() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  const keyword = search || '';
  const [animals, setAnimals] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const animals = await searchData(keyword);
      setAnimals(animals);
      setLoading(false);
    };

    fetchData();
  }, [keyword]);

  if (loading) {
    return (
      <ResultsContainer>
        <div
          style={{ display: 'flex', flexDirection: 'column', width: '100vw' }}
        >
          {[...new Array(10)].map((item, index) => {
            return <LoadingContainer key={index} />;
          })}
        </div>
      </ResultsContainer>
    );
  }

  if (animals.length === 0) {
    return (
      <ResultsContainer>
        <ResultsNotFound
          keyword={keyword}
          title='No results found for'
          description='insect, fish, horse, crocodile, bear, cetacean, cow, lion,
              rabbit, cat, snake, dog, bird.'
        />
      </ResultsContainer>
    );
  }

  // if (keyword === '') {
  //   return (
  //     <ResultsContainer>
  //       <ResultsNotFound
  //         description='insect, fish, horse, crocodile, bear, cetacean, cow, lion,
  //           rabbit, cat, snake, dog, bird.'
  //       />
  //     </ResultsContainer>
  //   );
  // }

  return (
    <ResultsContainer>
      <ResultsList data={animals} />
      <ResultPreview />
    </ResultsContainer>
  );
}

export default ResultsPage;
