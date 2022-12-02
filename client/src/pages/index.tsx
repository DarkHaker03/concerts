import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LayoutForRegistrationAndregistration } from 'shared/ui/layout-for-autorization-and-registration';
import { AppLayout } from 'shared/ui/app-layout';
import { Autorization } from './autorization/ui';
import { Welcome } from './welcome/ui';
import { Home } from './home/ui';
import { Registration } from './registration/ui';
import { Event } from './event/ui';
import { Favourites } from './favourites/ui';
import { Settings } from './settings/ui';
import { Default } from './settings/ui/default';
import { PersonalData } from './settings/personal-data';
import { Help } from './settings/help';

const router = createBrowserRouter([
  {
    element: <LayoutForRegistrationAndregistration />,
    children: [
      {
        path: '/registration',
        element: <Registration />,
      },
      {
        path: '/autorization',
        element: <Autorization />,
      },
    ],
  },
  {
    path: '/welcome',
    element: <Welcome />,
  },
  {
    path: '/home',
    element: (
      <AppLayout
        headerConfiguration={{
          logo: true,
          notification: true,
          searchInput: true,
        }}
      >
        <Home />
      </AppLayout>
    ),
  },
  {
    path: '/event',
    element: (
      <AppLayout
        headerConfiguration={{
          logo: true,
          notification: true,
        }}
      >
        <Event />
      </AppLayout>
    ),
  },
  {
    path: '/favourites',
    element: (
      <AppLayout headerConfiguration={{ logo: true, notification: true }}>
        <Favourites />
      </AppLayout>
    ),
  },
  {
    path: '/settings',
    element: (
      <AppLayout headerConfiguration={{ logo: true }}>
        <Settings />
      </AppLayout>
    ),
    children: [
      {
        path: '',
        element: <Default />,
      },
      {
        path: 'personaldata',
        element: <PersonalData />,
      },
      {
        path: 'help',
        element: <Help />,
      },
    ],
  },
]);

const Pages = () => <RouterProvider router={router} />;

export default Pages;
