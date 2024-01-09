import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/Root.tsx';
import EventsRootLayout from './pages/EventsRoot.tsx';
import HomePage from './pages/Home.tsx';
import EditEventPage from './pages/EditEvent.tsx';
import EventDetailPage from './pages/EventDetail.tsx';
import EventsPage from './pages/Events.tsx';
import NewEventPage from './pages/NewEvent.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          { path: '', element: <EventsPage /> },
          { path: 'new', element: <NewEventPage /> },
          { path: ':id', element: <EventDetailPage /> },
          { path: ':id/edit', element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
