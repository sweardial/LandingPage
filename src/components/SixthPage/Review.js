import React from 'react';
import './SixthPage.css'

const Review = ({photo, name, profession}) => {
  return (
    <div className='Rv'>
      <div className='Info'>
        <div className={photo}></div>
        <div className='NameProfession'>
            <p id='name'>{name}</p>
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
