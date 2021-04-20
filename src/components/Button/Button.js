import React from 'react';
import './Button.css';

const STYLES = ['btn--colored', 'btn--transperent']

const Button = ({ children, className }) => {
  const style = STYLES.includes(className) ? className : STYLES[1]
  return (
    <button className={`btn ${style}`}>
      {children}
    </button>
  );
};

export default Button