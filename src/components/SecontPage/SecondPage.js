import React from 'react';
import './SecondPage.css';
import '../CommonStyles.css'
import TextDiv from './TextDiv'

const SecondPage = () => {
  return (
    <div className='Page'>
      <div className='LargeText_center'>FEATURES</div>
      <p className='paragraph_center'>
        Most calendars are designed for teams. Slate is designed for freelancers who want a simple
        way to plan their schedule.
      </p>
      <div className='SProw'>
        <div className='ChatBot'></div>
        <div className='LineChart'></div>
        <div className='SPTextArea'>
            <TextDiv />
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
