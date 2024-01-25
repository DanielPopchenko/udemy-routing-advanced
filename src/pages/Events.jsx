import React from 'react';
import { Link } from 'react-router-dom';

const events = [
  { id: 'e-1', title: 'Event - 1' },
  { id: 'e-2', title: 'Event - 2' },
  { id: 'e-3', title: 'Event - 3' },
];

const Events = () => {
  return (
    <div>
      <h1>Events</h1>

      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h2>{event.title}</h2>
            <Link to={`${event.id}`}>See details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
