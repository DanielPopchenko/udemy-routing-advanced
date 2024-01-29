import React from 'react';
import PageContent from '../components/PageContent';
import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const Error = () => {
  const error = useRouteError();
  console.log(error.status);
  let title = 'An error occured.';
  let message = 'Something went wrong.';

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resourse or page.';
  }
  return (
    <>
      <MainNavigation />
      <PageContent title="An errror occured!">
        <p>Something went wrong.</p>
      </PageContent>
    </>
  );
};

export default Error;
