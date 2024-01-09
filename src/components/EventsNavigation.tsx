export default function EventsNavigation() {
  return (
    <header className="events-nav-header">
      <nav>
        <ul className="events-nav-list">
          <li>
            <a href="/events">All Events</a>
          </li>
          <li>
            <a href="/events/new">New Event</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
