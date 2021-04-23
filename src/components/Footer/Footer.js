import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='Column'>
                <h3>Fingertipe</h3>
                <ul>
                    <li>Home</li>
                    <li>Examples</li>
                    <li>Pricing</li>
                    <li>Update</li>
                </ul>

            </div>
            <div className='Column'>
                <h3>Resources</h3>
                <ul>
                    <li>Home</li>
                    <li>Examples</li>
                    <li>Pricing</li>
                    <li>Update</li>
                </ul>
            </div>
            <div className='Column'>
                <h3>About</h3>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li>Examples</li>
                    <li>Pricing</li>
                    <li>Update</li>
                </ul>
            </div>
            <div className='Column Contacts'>
                <div className='adress'>
                    <div className='logo'></div>
                    <h4>7480 Mockingbird Hill undefined</h4>
                </div>
                <div className='telephone'>
                    <div className='logo'></div>
                    <h4>(239) 555-0108</h4>

                </div>
                <div className='Links'>
                    <div className='Twitter'></div>
                    <div className='Facebook'></div>
                    <div className='LinkedIn'></div>
                </div>

            </div>
        </div>
    )
}

export default Footer;