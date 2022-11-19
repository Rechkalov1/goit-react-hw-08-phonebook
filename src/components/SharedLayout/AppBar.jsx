import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import { HeaderWrapper } from './AppBar.styled';
export default function AppBar() {
  return (
    <>
      <HeaderWrapper>
        <Navigation />
      </HeaderWrapper>
      <div>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}
