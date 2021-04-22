import React from 'react';
import '../CommonStyles.css';
import './FourthPage.css'
import Button from '../Button/Button'

const FourthPage = () => {
  return (
    <div className='Page'>
      <div className='LargeText_center'>Gallery</div>
      <p className='paragraph_center'>
        We focus on ergonomics and meeting you where you work. It's only a keystroke away.
      </p>
      <div className='FPPictures'>
          <div className='SmallPicture second'></div>
          <div className='SmallPicture third'></div>
          <div className='SmallPicture fourth'></div>
          <div className='SmallPicture sixth'></div>
          <div className='BigPicture first'></div>
          <div className='SmallPicture seventh'></div>
          <div className='BigPicture eight'></div>
      </div>
      <Button>See More</Button>
    </div>
  );
};

export default FourthPage;
