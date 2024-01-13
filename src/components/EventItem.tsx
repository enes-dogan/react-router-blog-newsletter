import { Link } from 'react-router-dom';

import { EventTypes } from '../types.ts';

export default function EventItem({ event }: { event: EventTypes }) {
  function startDeleteHandler() {
    // ...
  }

  return (
    <article className="event-item-event">
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className="event-item-actions">
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}
