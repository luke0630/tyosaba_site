import React from 'react';

import Position from "./CardPos";
import './ImageCard.css'

const NewLine = ({ msg }) => {
  const texts = msg.split(/(\n)/).map((item, index) => {
    return (
      <React.Fragment key={index}>
        { item.match(/\n/) ? <br /> : item }
      </React.Fragment>
    );
  });
  return <div>{texts}</div>;
};

const Card = ({ imgsrc, title, description, pos }) => {
  const result = NewLine({ msg: description })

    // クラス名を動的に設定
    const cardClass = pos === Position.LEFT ? "card left" : "card right";
  
    return (
      <div className={cardClass}>
        <div className="guid">
            <img src={imgsrc} alt="Card image"></img>
        </div>
        <div className="guid2">
          <div className="content">
            <h2 className="title">{title}</h2>
            <div className="title_underline"></div>
            <h3 className="description">{result}</h3>
          </div>
        </div>
      </div>
    );
};

export default Card;
