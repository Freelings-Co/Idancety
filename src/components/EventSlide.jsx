import React from 'react';
import '../styles/Event.css';




const EventSlide = ({ imageSrc, imageAlt, title, description }) => {
  return (
    <div className="event-slide">
      <div className="event-slide-image-wrapper">
        <img src={imageSrc} alt={imageAlt} className="event-slide-image" />
      </div>
      <div className="event-slide-content">
        <h2 className="event-slide-title">{title}</h2>
        <p className="event-slide-description">{description}</p>
      </div>
    </div>
  );
};

export default EventSlide;
