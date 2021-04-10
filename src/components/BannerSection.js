import React from 'react';
import '../App.css';
import { Button } from './Button';
import './BannerSection.css';
import keyboard from './img/keyboard.jpg';


function BannerSection() {
  return (
    <div className='banner-container' 
    style={{
        backgroundImage: 'url('+keyboard+')',
        backgroundSize: "100% 100%",
        height: "100vh",
        
      }}
    >
      <h1>Hi, I'm Tony</h1>
      <h2>I'm a software developer</h2>
      <p>Welcome to my website</p>
      <p>I hope you enjoy it!</p>
      <div className='banner-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Learn More
        </Button>
      </div>
    </div>
  );
}

export default BannerSection;