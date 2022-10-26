import React from 'react';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <ul>
    {options.map(option => (
      <li key={option}>
        <button onClick={() => onLeaveFeedback(option)}>{option}</button>
      </li>
    ))}
  </ul>
);
