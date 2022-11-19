import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

export default function AppBar() {
  return (
    <>
      <Navigation />

      <div>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}
