import { NavLink } from 'react-router-dom';

export default function MainNavigation() {
  return (
    <header className="main-nav-header">
      <nav>
        <ul className="main-nav-list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) => (isActive ? 'active' : '')}
              end
            >
              Events
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
