import React from 'react';
import '../../App.css';
import './Portfolio.css';
import { PortButton } from '../PortButton';
import { PortBackButton } from '../PortBackButton';
import Cards from '../Cards';
import Footer from '../Footer';

export default function Portfolio() {
  return (
    <>
      <div className="portfolio-container">
        <h1>Welcome to my portfolio</h1>
      </div>
      <Cards/>
      <div className="port-btn-container">
        <div className="port-btn">
              <PortBackButton
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
              >
                Back
              </PortBackButton>
              <PortButton
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
              >
                Learn More
              </PortButton>
            </div>
        </div>
      <Footer/>
    </>
  )
}
