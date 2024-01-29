import React from 'react';
import { json, redirect, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

const EventDetails = () => {
  const data = useRouteLoaderData('event-datail');

  return <EventItem event={data.event} />;
};

export default EventDetails;

// ! We should not forget to add it in routes definitions
// !? loader
export const loader = async ({ request, params }) => {
  const id = params.id;
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw json(
      { message: 'Could not fecth details for selected events' },
      // ! meta data object
      { status: 500 },
    );
  } else {
    return response;
  }
};

// ! deleting action
export const action = async ({ params, request }) => {
  const response = await fetch(`http://localhost:8080/events/${params.id}`, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      { message: 'Could not delete a selected event.' },
      // ! meta data object
      { status: 500 },
    );
  }
  return redirect('/events');
};
