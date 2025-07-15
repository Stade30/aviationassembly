import React from 'react';

function Card({ title, description }) {
  return (
    <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md border dark:border-gray-600">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

export default Card;
