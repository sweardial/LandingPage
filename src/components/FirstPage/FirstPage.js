import React from 'react';
import './FirstPage.css';
import '../CommonStyles.css'
import Button from '../Button/Button'

const FirstPage = () => {
  return (
    <div className='Page'>
      <div className='FPWelcomeText'>Work at the speed of thought</div>
      <p className='paragraph_center'>
        Most calendars are designed for teams. Slate is designed for freelancers who want a simple
        way to plan their schedule.
      </p>
      <div className='FPButtons'>
        <Button className='btn--colored'>Try For Free</Button>
        <Button>Learn More</Button>
      </div>
      <div className='FPbgi'></div>
    </div>
  );
};

export default FirstPage;
