import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LayoutForRegistrationAndregistration } from 'shared/ui/layout-for-autorization-and-registration';
import { AppLayout } from 'shared/ui/app-layout';
import { Autorization } from './autorization/ui';
import { Welcome } from './welcome/ui';
import { Main } from './home/ui';
import { Registration } from './registration/ui';
import { Event } from './event/ui';

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
        <Main />
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
]);

const Pages = () => <RouterProvider router={router} />;

export default Pages;
