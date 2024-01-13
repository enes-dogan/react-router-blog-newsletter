import { useRouteLoaderData, json } from 'react-router-dom';
import { EventDetailLoaderParams, EventTypes } from '../types.ts';

import EventItem from '../components/EventItem.tsx';

export default function EventDetailPage() {
  const data = useRouteLoaderData('event-detail') as { event: EventTypes };

  return <EventItem event={data.event} />;
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }: EventDetailLoaderParams) {
  const id = params.eventId!;

  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw json(
      { message: 'Could not load details of selected event' },
      { status: 500 }
    );
  } else {
    return response;
  }
}
