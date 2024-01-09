import { useEffect, useState } from 'react';
import { EventTypes } from '../types.ts';

import EventsList from '../components/EventsList.tsx';

export default function EventsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedEvents, setFetchedEvents] = useState<EventTypes[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);
      const response = await fetch('http://localhost:8080/events');

      if (!response.ok) {
        setError('Fetching events failed.');
      } else {
        const resData = (await response.json()) as { events: EventTypes[] };
        setFetchedEvents(resData.events);
      }
      setIsLoading(false);
    }

    void fetchEvents();
  }, []);
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
    </>
  );
}

// <ul>
//    {DUMMY_EVENTS.map(event => (
//      <li key={event.id}>
//        <h3>{event.title}</h3>
//        <p>{event.location}</p>
//        <Link to={event.id}>Details</Link>
//      </li>
//    ))}
//  </ul>

// import { Link } from 'react-router-dom';
