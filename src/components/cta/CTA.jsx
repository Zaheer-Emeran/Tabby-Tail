import React from 'react';
import './cta.css';

const CTA = ({ title, text ,activity_Level}) => (
  <div className="tabby_Tail__catalogue-container__catalogue">
    <div className="tabby_Tail__catalogue-container__catalogue-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="tabby_Tail__catalogue-container_catalogue-text">
      <p>{text}</p>
    </div>




  </div>
);

export default CTA
