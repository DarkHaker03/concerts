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
import { Profile } from './settings/profile';
import { Help } from './settings/help';
import { Tickets } from './tickets/ui';
import { BuyTicket } from './buy-ticket/ui';

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
    path: '/tickets',
    element: (
      <AppLayout headerConfiguration={{ logo: true, notification: true }}>
        <Tickets />
      </AppLayout>
    ),
  },
  {
    path: '/buyticket',
    element: (
      <AppLayout headerConfiguration={{ logo: true, notification: true }}>
        <BuyTicket />
      </AppLayout>
    ),
  },
  {
    path: '/settings',
    element: (
      <AppLayout headerConfiguration={{ logo: true, notification: true }}>
        <Settings />
      </AppLayout>
    ),
    children: [
      {
        path: '',
        element: <Default />,
      },
      {
        path: 'profile',
        element: <Profile />,
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
