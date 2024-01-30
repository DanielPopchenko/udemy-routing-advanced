import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Events, { loader as eventsLoader } from './pages/Events';
import Home from './pages/Home';
import EventDetails, {
  loader as eventDetailsLoader,
  action as deleteEventAction,
} from './pages/EventDetails';
import EditEvent from './pages/EditEvent';
import NewEvent from './pages/NewEvent';
import RootLayout from './pages/RootLayout';
import EventsRoot from './pages/EventsRoot';
import Error from './pages/Error';
import { action as manipulateEventAction } from './components/EventForm';
import Newsletter, { action as newsletterAction } from './pages/Newsletter';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        {
          path: 'events',
          element: <EventsRoot />,
          children: [
            //   ! this loader function will be executed just
            //   ! before jsx code compilation
            {
              index: true,
              element: <Events />,
              loader: eventsLoader,
            },
            {
              // ! Everywhere where this dunamic id is needed
              // ! I use this :id ---> id identificator
              path: ':id',
              id: 'event-datail',
              loader: eventDetailsLoader,
              children: [
                { index: true, element: <EventDetails />, action: deleteEventAction },
                { path: 'edit', element: <EditEvent />, action: manipulateEventAction },
              ],
            },
            { path: 'new', element: <NewEvent />, action: manipulateEventAction },
          ],
        },
        { path: 'newsletter', element: <Newsletter />, action: newsletterAction },
      ],
    },
  ]);
  return (
    <RouterProvider router={router}>
      <div>
        <h1>Hello</h1>
      </div>
    </RouterProvider>
  );
}

export default App;
