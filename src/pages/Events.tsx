import { Link } from 'react-router-dom';

const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'First Event',
    location: 'Istanbul',
  },
  {
    id: 'e2',
    title: 'Second Event',
    location: 'Ankara',
  },
  {
    id: 'e3',
    title: 'Third Event',
    location: 'Izmir',
  },
  {
    id: 'e4',
    title: 'Fourth Event',
    location: 'Antalya',
  },
];

export default function EventsPage() {
  return (
    <>
      <ul>
        {DUMMY_EVENTS.map(event => (
          <li key={event.id}>
            <h3>{event.title}</h3>
            <p>{event.location}</p>
            <Link to={event.id}>Details</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
