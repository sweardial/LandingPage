import React from 'react';
import './TextDiv.css';

const list = [
  {
    bgi: 'Vector1',
    main_text: 'A single source of truth',
    descriprion:
      'When you add work to your Slate calendar we automatically calculate useful insights',
  },
  {
    bgi: 'Vector2',
    main_text: 'Intuitive interface',
    descriprion:
      'When you add work to your Slate calendar we automatically calculate useful insights',
  },
  {
    bgi: 'Vector3',
    main_text: 'Or with rules',
    descriprion:
      'When you add work to your Slate calendar we automatically calculate useful insights',
  },
];

const TextDiv = () => {
  return list.map(item => {
    return (
      <div className='Item'>
        <div className='LogoH1'>
          <div className={item.bgi}></div>
          <h1>{item.main_text}</h1>
        </div>
        <p>{item.descriprion}</p>
      </div>
    );
  });
};

export default TextDiv;
