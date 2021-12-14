import React from 'react';
import PropTypes from "prop-types";
import cardBack from "./../assets/CardBack.png";


function Card(props){
  return (
    <React.Fragment>
      <div>
        <h3>{props.name}</h3>
        <img src={cardBack} alt="An image of a card back" />
      </div>
      <hr />
    </React.Fragment>
  );
}


Card.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string
};

export default Card;