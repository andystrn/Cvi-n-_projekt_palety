import React from 'react';
import './style.css';

const SchemeColor = ( {color} ) => <div key={color} className="scheme-color" style={{backgroundColor: color}} >{color}</div>;

export default SchemeColor;