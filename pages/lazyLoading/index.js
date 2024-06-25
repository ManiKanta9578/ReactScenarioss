// Index.js
import React, { Suspense, lazy } from 'react';

// Lazy load the component
const LazyComponent = lazy(() => import('../../components/lazyLoading/lazyLoading'));

const Index = () => {
  return (
    <div>
      This is Lazy Loading
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default Index;
