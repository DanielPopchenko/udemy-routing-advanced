import { Suspense } from 'react';
import { defer, json, redirect, useRouteLoaderData, Await } from 'react-router-dom';
import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';

const EventDetails = () => {
  const { event, events } = useRouteLoaderData('event-datail');

  console.log('event: ', event);
  console.log('events: ', events);

  return (
    <>
      {/* Each data fetch component should be wrapped by <Suspense> component to wait for both independently */}
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loaing...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>

      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetails;

const loadEvent = async (id) => {
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw json(
      { message: 'Could not fecth details for selected events' },
      // ! meta data object
      { status: 500 },
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
};

const loadEvents = async () => {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events!' };
    // ! the error will be the closest error element
    // ! In our example it`s root error element
    // we can throw error obj
    // throw { message: 'Could not fetch events!!!' };
    // ! or response object
    // throw new Response(
    //   JSON.stringify(
    //     { message: 'Could not fetch events.' },
    //     {
    //       status: 500,
    //     },
    //   ),
    // );

    // ! function that converts data to json
    throw json({ message: 'Could not fetch events.' }, { status: 500 });
  } else {
    const resData = await response.json();
    // ! that is required because now we have this obj with events key
    return resData.events;
  }
};

// ! We should not forget to add it in routes definitions
// !? loader
export const loader = async ({ request, params }) => {
  const id = params.id;

  return defer({
    // ! event will be awaited before loading this page
    // ! with this we will never see a loading... text for the event component
    event: await loadEvent(id),
    // ! events will be rendered after rendering this page
    events: loadEvents(),
  });
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
