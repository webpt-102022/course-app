import React from 'react';

export default function Card({ course }) {
  const { image, title, description, price, hasDiscount, type } = course;

  return (
    <div className="card">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{description}</p>
      <ul>
        <li>Price: {price}$</li>
        <li>{hasDiscount ? 'This course has discount' : 'No discounts available for this course'}</li>
        <li>Type of course: {type}</li>
      </ul>
      <button className="btn">See more</button>
    </div>
  )
}


