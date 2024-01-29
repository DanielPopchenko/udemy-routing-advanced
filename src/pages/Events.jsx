import { useLoaderData, json } from 'react-router-dom';

import EventsList from '../components/EventsList';

// ! here we store loader function

function Events() {
  // This data will be that data that is returned from the loader function
  // ! I do not need to use it here, i can use ir deeper in EventsList
  const data = useLoaderData();

  if (data.isError) {
    return <p>{data.message}</p>;
  }

  const events = data.events;
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default Events;

export const loader = async () => {
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
    // const resData = await response.json();
    // // ! this returned value will be available in components
    // // ! where you use useLoaderData() hook.
    // // ? Here I`ll always get a data, not Promise, because Router
    // // ? checks if Promise is ok and returns actual data from it
    return response;
  }
};
