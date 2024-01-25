import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetails = () => {
  const params = useParams();
  return (
    <div>
      <h2>Event - {params.id}</h2>
    </div>
  );
};

export default EventDetails;
