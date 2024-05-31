import React, { useState } from 'react';
import '../styles/Card.css';

interface CardProps {
  /*
    This is the Card component that represents a single card in the game. We need to
    track the state of the card to determine if it has been flipped or matched. We also
    need to track the type of card to check if two cards are a match. If the cards are a match,
    we can update the state of the cards to indicate that they are matched. If they are not a match,
    we can flip the cards back over.
  */
  cardNumber: number;

}

const Card: React.FC<CardProps> = ({ cardNumber }) => {
  const [isClicked, setIsClicked] = useState(false); // state to manage if card has been clicked

  const handleClick = () => {
    setIsClicked(true); // set isClicked to true when card is clicked
  };

  return (
    <div className="card" onClick={handleClick}>
      Card {cardNumber} {isClicked && 'Clicked'}
    </div>
  );
};

export default Card;