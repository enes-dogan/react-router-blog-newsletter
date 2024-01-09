import { EventTypes } from '../types.ts';

export default function EventsList({ events }: { events: EventTypes[] }) {
  return (
    <div className="events-list-events">
      <h1>All Events</h1>
      <ul className="events-list-list">
        {events.map(event => (
          <li key={event.id} className="events-list-item">
            <a href="...">
              <img src={event.image} alt={event.title} />
              <div className="events-list-content">
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
