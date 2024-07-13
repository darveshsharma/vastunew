// StarRating.jsx
import React from 'react';

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    const className = i <= rating ? 'fas fa-star' : 'far fa-star';
    stars.push(<i key={i} className={className}></i>);
  }

  return (
    <div className="star-rating">
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};

export default StarRating;
