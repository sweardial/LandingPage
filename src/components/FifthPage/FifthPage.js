import React from 'react';
import '../CommonStyles.css';
import './FifthPage.css'
import Button from '../Button/Button'

const FifthPage = () => {
  return (
    <div className='Page'>
      <div className='LargeText_center'>Partners</div>
      <p className='paragraph_center'>
        We focus on ergonomics and meeting you where you work. It's only a keystroke away.
      </p>
      <div className='PartnersLogos'>
          <div className='Logos apple'></div>
          <div className='Logos android'></div>
          <div className='Logos mountain'></div>
          <div className='Logos airbnb'></div>
          <div className='Logos ibm'></div>
      </div>
      <Button>All Partners</Button>
    </div>
  );
};


export default FifthPage;