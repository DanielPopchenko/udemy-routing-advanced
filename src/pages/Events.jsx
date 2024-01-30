import { useLoaderData, json, defer, Await } from 'react-router-dom';

import EventsList from '../components/EventsList';
import { Suspense } from 'react';

// ! here we store loader function

function Events() {
  // This data will be that data that is returned from the loader function
  // ! I do not need to use it here, i can use ir deeper in EventsList
  const { events } = useLoaderData();

  // Suspense -> to show a fallback while something is loading/fetching
  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default Events;

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

export const loader = () => {
  //  ! here between {} - we bundle all http requests that are going on
  return defer({ events: loadEvents() });
};
