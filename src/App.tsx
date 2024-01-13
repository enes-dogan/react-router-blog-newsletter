import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/Root.tsx';
import EventsRootLayout from './pages/EventsRoot.tsx';
import HomePage from './pages/Home.tsx';
import EditEventPage from './pages/EditEvent.tsx';
import EventDetailPage, {
  loader as eventDetailLoader,
} from './pages/EventDetail.tsx';
import EventsPage, { loader as eventsLoader } from './pages/Events.tsx';
import NewEventPage from './pages/NewEvent.tsx';
import ErrorPage from './pages/Error.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            element: <EventDetailPage />,
            loader: ({ params }) =>
              fetch(`http://localhost:8080/events/${params.eventId!}`),
          },
          { path: ':id/edit', element: <EditEventPage /> },
          { path: 'new', element: <NewEventPage /> },
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
