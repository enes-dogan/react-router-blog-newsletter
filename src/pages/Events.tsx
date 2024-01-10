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
  const response = await fetch('http://localhost:8080/eventss');

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: 'Could not load events.' }), {
      status: 500,
    });
    // throw json(
    //   { message: 'Could not load events.' },
    //   {
    //     status: 500,
    //   }
    // ); // react-router-dom handle throw and use its Response in errorElement component
  } else {
    return response; // react-router-dom package can handle Response objects.
  }
}
