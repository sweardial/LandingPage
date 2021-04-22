import React from 'react'
import '../CommonStyles.css'
import './Review'
import Review from './Review'

const SixthPage = () => {
    return (
        <div className='Page'>
            <div className='LargeText_center'>Testimonials</div>
            <div className='ReviewWindow'>
                <Review photo='src\components\SixthPage\pictures\Ellipse1.png' name='Claire Bell' profession='Designer'/>
                <Review photo='src\components\SixthPage\pictures\Ellipse1.png' name='Claire Bell' profession='Designer'/>
                <Review photo='src\components\SixthPage\pictures\Ellipse1.png' name='Claire Bell' profession='Designer'/>
                <Review photo='src\components\SixthPage\pictures\Ellipse1.png' name='Claire Bell' profession='Designer'/>
            </div>
        </div>
    )
}

export default SixthPage;