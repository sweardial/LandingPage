import React from 'react';
import './Review.css'

const Review = ({photo, name, profession }) => {
  return (
    <div className='Rv'>
      <div className='Info'>
        <img className='Photo' src={photo} alt='ph'></img>
        <div className='NameProfession'>
            <p>{name}</p>
            <p>{profession}</p>
        </div>
      </div>
      <div className='TextReview'>
        <p>
          Slate helps you see how many more days you need to work to reach your financial goal for
          the month and year. Slate helps you see how many more days you need to work to reach your
          financial goal for the month and year.your financial goal for the month and year.
        </p>
      </div>
    </div>
  );
};

export default Review;
