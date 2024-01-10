import { useLoaderData, json } from 'react-router-dom';
import { EventTypes } from '../types.ts';

import EventsList from '../components/EventsList.tsx';

export default function EventsPage() {
  const data = useLoaderData() as { events: EventTypes[] };

  return (
    <>
      <EventsList events={data.events} />
    </>
  );
}

export async function loader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw json(
      { message: 'Could not load events.' },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
