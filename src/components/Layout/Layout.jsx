import Header from 'components/Header';
import { Box } from 'components/Reusable Components/Box';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom/dist';
import { Wraper } from './Layout.styled';

function Layout() {
  return (
    <Wraper>
      <Header></Header>
      <Box as="section" p="32px 16px 32px 16px">
        <Suspense>
          <Outlet></Outlet>
        </Suspense>
      </Box>
    </Wraper>
  );
}

export default Layout;
