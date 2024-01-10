import { useLoaderData } from 'react-router-dom';
import { EventListLoaderReturnType } from '../types.ts';

import EventsList from '../components/EventsList.tsx';

export default function EventsPage() {
  const data = useLoaderData() as EventListLoaderReturnType;

  if (data.isError) {
    return <p>{data.message}</p>;
  }

  return (
    <>
      <EventsList events={data.events} />
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    return { isError: true, message: 'Could not receive events.' };
  } else {
    return response; // react-router-dom package can handle Response objects.
  }
}
