import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import React from 'react';

function LoadingContainer() {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <Skeleton height={15} width='25%' style={{ marginBottom: '6px' }} />
      <Skeleton height={25} width='45%' style={{ marginBottom: '6px' }} />
      <Skeleton height={15} width='85%' />
    </div>
  );
}

export default LoadingContainer;
