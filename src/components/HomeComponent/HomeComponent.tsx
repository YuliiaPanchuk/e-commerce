import React from 'react';
import './HomeComponent.css';

export function HomeComponent() {
  return (
    <div className='home'>
      <div className="mainHomeImage">
        <img src="/images/main.jpg" alt="" />
      </div>

      <div className="mainHeader">
        <p>nom nom coffee</p>
      </div>
    </div>
  );
}