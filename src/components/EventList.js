// /src/components/EventList.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import EventItem from './EventItem';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'all'), orderBy('startTime', 'asc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const now = new Date();
      const eventsArray = [];
      querySnapshot.forEach((doc) => {
        const event = { id: doc.id, ...doc.data() };
        if (new Date(event.startTime) < now) {
          deleteDoc(doc.ref);
        } else {
          eventsArray.push(event);
        }
      });
      eventsArray.sort((a, b) => {
        if (a.startTime === b.startTime) {
          return b.duration - a.duration;
        }
        return new Date(a.startTime) - new Date(b.startTime);
      });
      setEvents(eventsArray);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <ul>
        {events.map(event => (
          <EventItem key={event.id} event={event} />
        ))}
      </ul>
    </div>
  );
};

export default EventList;
