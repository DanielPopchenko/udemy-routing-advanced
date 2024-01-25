import classes from './MainNavigation.module.css';
import Home from '../pages/Home';
import Events from '../pages/Events';
import EventDetails from '../pages/EventDetails';
import NewEvent from '../pages/NewEvent';
import EditEvent from '../pages/EditEvent';
import { Link, NavLink } from 'react-router-dom';

const routes = [
  { path: '/', element: <Home />, title: 'Home' },
  { path: '/events', element: <Events />, title: 'Events' },
  { path: '/new', element: <NewEvent />, title: 'New event' },
];

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          {routes.map((route) => (
            <NavLink
              key={`${route.path}`}
              to={route.path}
              className={({ isActive }) => (isActive ? `${classes.active}` : '')}
            >
              {route.title}
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
