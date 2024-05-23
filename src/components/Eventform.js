// /src/components/Eventform.js
import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const Eventform = () => {
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [duration, setDuration] = useState(5);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const now = new Date();
    const date = new Date(startTime);

    if (date < now) {
      alert('Cannot create an event in the past.');
      return;
    }

    try {
      const formattedStartTime = date.toISOString();
      await addDoc(collection(db, 'all'), {
        description,
        startTime: formattedStartTime,
        duration: parseInt(duration, 10)
      });
      console.log("Document successfully written!");
      setDescription('');
      setStartTime('');
      setDuration(5);
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label><strong>Description:</strong></label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <label><strong>Start Time:</strong></label>
      <input
        type="datetime-local"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        step="300"  // 5-minute increments
        required
      />
      <label><strong>Duration (minutes):</strong></label>
      <input
        type="number"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        step="5"
        min="5"
        required
      />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default Eventform;
