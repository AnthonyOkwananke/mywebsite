import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/mywebsite.png'
              text='A fully responsive personal website built with React.js, React Router, React Hook, HTML, and CSS.'
              label='Website'
              pathname='https://github.com/AnthonyOkwananke/mywebsite'
            />
            <CardItem
              src='images/rvshop.png'
              text='A simple e-commerce website built with Next.js showing the basic functionalities of an online store'
              label='E-commerce'
              pathname='https://github.com/AnthonyOkwananke/my-ecomm-store'
            />
            <CardItem
              src='images/billcalculator.png'
              text='A Windows desktop application built with C# and .NET to calculate electricity bill based on customer type and display the details in a CSV file'
              label='Desktop App'
              pathname='https://github.com/AnthonyOkwananke/City-Power-Company-V3---Lab_2'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/season-display-app.png'
              text='An app that displays a UI corresponding to the
              current weather season given the geolocation of a place
              and time of the year.'
              label='Season'
              pathname='https://github.com/AnthonyOkwananke/CurrentSeasonDisplay'
            />
            <CardItem
              src='images/step_wizard.png'
              text='A multistep form that takes the user through 
              the necessary steps in filling out a form'
              label='Form'
              pathname='https://github.com/AnthonyOkwananke/stepwizard'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;