// Challenge / Exercise

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Events from './pages/Events';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import EditEvent from './pages/EditEvent';
import NewEvent from './pages/NewEvent';
import RootLayout from './pages/RootLayout';

// ! 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// ! 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// ! 3. Add a root layout that adds the <MainNavigation> component above all page components
// ! 4. Add properly working links to the MainNavigation
// ! 5. Ensure that the links in MainNavigation receive an "active" class when active
// ! 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// ! 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/events', element: <Events /> },
        { path: '/new', element: <NewEvent /> },
        { path: '/events/:id', element: <EventDetails /> },
        { path: '/events/:id/edit', element: <EditEvent /> },
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
