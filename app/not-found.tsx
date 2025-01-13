import { Suspense } from 'react';
import PageNotFound from '@/components/global/PageNotFound';

const NotFoundPage = () => {
  return (
    <PageNotFound
      title='Page not found 404'
      message='Unfortunately we could not found that page.'
    />
  );
};

const SuspendedNotFound = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <NotFoundPage />
  </Suspense>
);

export default SuspendedNotFound;
