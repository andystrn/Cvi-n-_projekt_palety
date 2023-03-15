import React from 'react';
import './style.css';
import SchemeColor from '../SchemeColor';

const Palette = ( paletteData ) => {
    const {name, image, attribution, colors, direction, description} = paletteData.paletteData;
    return (
        <div className="palette">
          <div className={`palette-scheme palette-scheme--${direction}`}>
            <img className="scheme-image" src={image} alt={name} />
            <div className="scheme-colors">
             {colors.map((color) => (
                <SchemeColor key={color} color={color} />
                ))}
            </div>
          </div>
          <div className="palette-info">
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Photo by <a href={attribution.url} target="_blank">{attribution.name}</a>.</p>
          </div>
        </div>
    );
}

export default Palette;