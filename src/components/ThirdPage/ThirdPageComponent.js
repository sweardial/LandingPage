import React from 'react'
import Button from '../Button/Button'
import '../CommonStyles.css'
import './ThirdPage.css'

const ThirdPageComponent = ({main_text, description, buttonText, image_url}) => {
    return (
        <div className='Page'>
            <div className='ThirdPageComponent'>
                <div className='head_text'>{main_text}</div>
                <div className='description'>{description}</div>
                <Button className='btn--colored'>{buttonText}</Button>
                <div className={image_url}></div>
            </div>
        </div>
    )
}

export default ThirdPageComponent;