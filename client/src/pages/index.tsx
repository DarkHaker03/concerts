import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Registration } from 'pages/registration/ui';
import { Autorization } from 'pages/autorization/ui';
import { Welcome } from 'pages/welcome/ui';
import { Home } from 'pages/home/ui';

const router = createBrowserRouter([
  {
    path: '/autorization',
    element: <Autorization />,
  },
  {
    path: '/registration',
    element: <Registration />,
  },
  {
    path: '/welcome',
    element: <Welcome />,
  },
  {
    path: '/home',
    element: <Home />,
  },
]);

const Pages = () => <RouterProvider router={router} />;

export default Pages;
