import React, { Suspense } from 'react';

import AppBar from './AppBar';

export const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}></Suspense>
    </>
  );
};
