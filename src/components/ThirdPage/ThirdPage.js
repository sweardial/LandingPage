import React from 'react';
import ThirdPageComponent from './ThirdPageComponent';
import './ThirdPage.css';
import '../CommonStyles.css';

const ThirdPage = () => {
  return (
    <div className='Page'>
      <div className='LargeText_center'>Contents</div>
      <p className='paragraph_center'>
        We focus on ergonomics and meeting you where you work. It's only a keystroke away.
      </p>
      <div className='Components'>
        <ThirdPageComponent
          main_text='Work'
          description='Ever wondered if youre too reliant on a client for work? Slate helps you identify .'
          buttonText='Sign Up'
          image_url='first1'
        />
        <ThirdPageComponent
          main_text='Design with real data'
          description='Ever wondered if youre too reliant on a client for work? Slate helps you identify .'
          buttonText='Try For Free'
          image_url='first1'
        />
      </div>
    </div>
  );
};

export default ThirdPage;
