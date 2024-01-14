import { json, redirect } from 'react-router-dom';
import { NewEventLoaderActionParams } from '../types.ts';

import EventForm from '../components/EventForm.tsx';

export default function NewEventPage() {
  return <EventForm />;
}

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }: NewEventLoaderActionParams) {
  const data = await request.formData();

  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  };

  const response = await fetch('http://localhost:8080/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw json({ message: 'Could not save event' }, { status: 500 });
  }

  return redirect('/events');
}
