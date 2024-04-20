import React from 'react';

const Countdown = ({ events }) => {
  const now = new Date();
  const nextEvent = events.find(event => new Date(event.date) > now);

  if (!nextEvent) {
    return <p>No upcoming exams!</p>;
  }

  const nextDate = new Date(nextEvent.date);
  const timeDiff = nextDate - now;

  const daysRemaining = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hoursRemaining = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
  const labelText = nextEvent.label;


  return (
      <div className="rounded-lg mb-4 bg-blue-500 text-white p-4">
      <p className="text-lg font-bold">{daysRemaining} days {hoursRemaining} hours</p>
      <p className="text-sm font-light">to {labelText}</p>
      </div>
  );
};

export default Countdown;
