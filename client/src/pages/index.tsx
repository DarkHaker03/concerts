import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LayoutForRegistrationAndregistration } from 'shared/ui/layout-for-autorization-and-registration';
import { AppLayout } from 'shared/ui/app-layout';
import { Autorization } from './autorization/ui';
import { Welcome } from './welcome/ui';
import { Home } from './home/ui';
import { Registration } from './registration/ui';
import { Event } from './event/ui';
import { Favourites } from './favourites';

const router = createBrowserRouter([
  {
    path: '/autorization',
    element: (
      <LayoutForRegistrationAndregistration>
        <Autorization />
      </LayoutForRegistrationAndregistration>
    ),
  },
  {
    path: '/registration',
    element: (
      <LayoutForRegistrationAndregistration>
        <Registration />
      </LayoutForRegistrationAndregistration>
    ),
  },
  {
    path: '/welcome',
    element: <Welcome />,
  },
  {
    path: '/home',
    element: (
      <AppLayout>
        <Home />
      </AppLayout>
    ),
  },
  {
    path: '/event',
    element: (
      <AppLayout>
        <Event />
      </AppLayout>
    ),
  },
  {
    path: '/favourites',
    element: (
      <AppLayout configuration={{ onlyPageName: true }}>
        <Favourites />
      </AppLayout>
    ),
  },
]);

const Pages = () => <RouterProvider router={router} />;

export default Pages;
