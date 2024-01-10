import { useLoaderData } from 'react-router-dom';
import { EventTypes } from '../types.ts';

import EventsList from '../components/EventsList.tsx';

export default function EventsPage() {
  const events = useLoaderData() as EventTypes[];

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export async function loader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    //...
  } else {
    const resData = (await response.json()) as {
      events: EventTypes[];
    };
    return resData.events;
  }
}
