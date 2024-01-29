import classes from './MainNavigation.module.css';
import Home from '../pages/Home';
import Events from '../pages/Events';
import NewEvent from '../pages/NewEvent';
import { NavLink } from 'react-router-dom';

const routes = [
  { path: '/', element: <Home />, title: 'Home' },
  { path: 'events', element: <Events />, title: 'Events' },
  { path: 'events/new', element: <NewEvent />, title: 'New event' },
];

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? `${classes.active}` : undefined)}
          >
            Home
          </NavLink>

          <NavLink
            to="events"
            className={({ isActive }) => (isActive ? `${classes.active}` : undefined)}
            end
          >
            Events
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
