// /src/components/EventItem.js
import React from 'react';
import { db } from '../firebase';
import { doc, deleteDoc } from 'firebase/firestore';

const EventItem = ({ event }) => {
  const handleDelete = async () => {
    const confirmed = window.confirm(`Are you sure you want to delete the event "${event.description}"?`);
    if (confirmed) {
      await deleteDoc(doc(db, 'all', event.id));
    }
  };

  return (
    <li>
      <div>
        <p>{new Date(event.startTime).toLocaleString('en-GB', {
          day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false
        })}</p>
        <h3>{event.description}</h3>
        <p>{event.duration} minutes</p>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
};

export default EventItem;
