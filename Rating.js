import React from 'react';

export default function Rating({ rating, defaultBase, newBase = 5 }) {
  const newRating = (rating / defaultBase) * newBase;
  const stars = [...Array(newBase).keys()];
  return <div className="rating">{stars.map(index => (index < newRating ? '★ ' : '☆	'))}</div>;
}