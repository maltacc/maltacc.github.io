import React from 'react';
import './Section.css';

const Section = ({ Icon, title, color, selected, onClick }) => {
  return (
    <div 
      className={`section ${selected && 'section--selected'}`} 
      style={{ borderBottom: `3px solid ${color}`, color: `${selected ? color : 'black'}` }}
      onClick={onClick}
    >
      <Icon fontSize="small"/>
      <h5>{title}</h5>
    </div>
  );
};

export default Section;