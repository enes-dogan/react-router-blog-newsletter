import { useRouteLoaderData, json, redirect } from 'react-router-dom';
import {
  EventTypes,
  EventDetailLoaderParams,
  DeleteEventActionParams,
} from '../types.ts';

import EventItem from '../components/EventItem.tsx';

export default function EventDetailPage() {
  const data = useRouteLoaderData('event-detail') as { event: EventTypes };

  return (
    <>
      <EventItem event={data.event} />
    </>
  );
}

/* eslint-disable react-refresh/only-export-components */
export async function loader({ params }: EventDetailLoaderParams) {
  const id = params.eventId!;

  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw json(
      { message: 'Could not load the details for selected event.' },
      { status: 500 }
    );
  } else {
    return response;
  }
}

export async function action({ request, params }: DeleteEventActionParams) {
  const id = params.eventId!;

  const response = await fetch(`http://localhost:8080/events/${id}`, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: 'Could not delete selected event' }, { status: 500 });
  }

  return redirect('/events');
}
