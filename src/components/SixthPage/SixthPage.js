import React from 'react';
import '../CommonStyles.css';
import Review from './Review';
import Button from '../Button/Button';

const SixthPage = () => {
  return (
    <div className='Page'>
      <div className='LargeText_center'>Testimonials</div>
      <div className='ReviewWindow'>
        <Review photo='Photo photo1' name='Claire Bell' profession='Designer' />
        <Review photo='Photo photo2' name='Samon Brit' profession='Designer' />
        <Review photo='Photo photo3' name='Lola Narrow' profession='Designer' />
        <Review photo='Photo photo4' name='Jaro Bellionni' profession='Designer' />
      </div>
      <div className='OpenTypeFeature'>
        <div className='TextButton'>
          <div className='Text'>OpenType features and Variable fonts</div>
          <Button className='btn--colored'>Try for free</Button>
        </div>
        <div className='FeaturePicture'></div>
      </div>
    </div>
  );
};

export default SixthPage;
