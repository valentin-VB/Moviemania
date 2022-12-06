import Header from 'components/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom/dist';
import { Wraper } from './Layout.styled';

function Layout() {
  return (
    <Wraper>
      <Header></Header>
      <Suspense>
        <Outlet></Outlet>
      </Suspense>
    </Wraper>
  );
}

export default Layout;
