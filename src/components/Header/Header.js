import React from 'react';
import './Header.css';
import { HeaderItems } from './HeaderItems';
import Button from '../Button/Button';

const Header = () => {
  return (
    <div className='Header'>
      <div className='LogoImage'></div>
      <ul className='navbar'>
        {HeaderItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <Button>Login</Button>
    </div>
  );
};

export default Header;
