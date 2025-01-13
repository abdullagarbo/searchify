'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import ResultsContainer from '@/components/Results/ResultsContainer';
import ResultsNotFound from '@/components/Results/ResultsNotFound';
import ResultsList from '@/components/Results/ResultsList';
import ResultPreview from '@/components/Results/ResultPreview';
import LoadingContainer from '@/components/global/LoadingContainer';
import Modal from '@/components/global/Modal';
import { Result } from '@/utils/types';
import { searchData, searchDataById } from '@/utils/data';

function ResultsPage() {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams
    ? searchParams?.get('search')?.toString() || ''
    : '';
  const keyword = search || '';
  const [animals, setAnimals] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);
  const [preview, setPreview] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const animals = await searchData(keyword);
      setAnimals(animals);
      setLoading(false);
      setPreview(false);
    };

    const params = new URLSearchParams(searchParams ? searchParams : '');
    params.set('withSearchInput', 'true');
    replace(`/results?${params.toString()}`);
    fetchData();
  }, [keyword, searchParams, replace]);

  const handlePreview = (id: number) => {
    const animals = searchDataById(id);
    setAnimals(animals);
    setPreview(true);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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

  if (keyword === '') {
    return (
      <ResultsContainer>
        <ResultsNotFound
          description='insect, fish, horse, crocodile, bear, cetacean, cow, lion,
            rabbit, cat, snake, dog, bird.'
        />
      </ResultsContainer>
    );
  }

  return (
    <ResultsContainer>
      <ResultsList data={animals} preview={(id) => handlePreview(id)} />
      {preview && isLargeScreen && <ResultPreview data={animals[0]} />}
      {preview && !isLargeScreen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ResultPreview data={animals[0]} />
        </Modal>
      )}
    </ResultsContainer>
  );
}

export default ResultsPage;
