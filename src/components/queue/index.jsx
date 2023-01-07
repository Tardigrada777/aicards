import { useMutation } from '@apollo/client';
import { addHours, differenceInHours } from 'date-fns';
import React, { useState } from 'react';
import { hoursToNextReview } from '../../domain';
import increaseLevel from '../../domain/increaseLevel';
import { UPDATE_CARD } from '../../graphql/queries';
import Card from '../card/card';

const CardQueue = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentCard = cards[currentIndex];

  const [execute] = useMutation(UPDATE_CARD);

  const onFeedback = async (card, answer) => {
    const interval = differenceInHours(new Date(card.prev_review), new Date(card.next_review));
    const hours = hoursToNextReview(Math.abs(interval), answer);
    const nextReview = addHours(new Date(card.next_review), hours).toISOString();
    const level = increaseLevel(card.level, answer);
    await execute({
      variables: {
        id: card.id,
        level,
        nextReview,
        prevReview: new Date().toISOString(),
      },
    });
    setCurrentIndex(currentIndex + 1);
    if (currentIndex === cards.length - 1) {
      window.location.reload();
    }
  };

  return (
    <div className="container">
      <Card
        key={currentCard.id}
        card={currentCard}        
        onFeedback={onFeedback}
      />
    </div>
  );
};

export default CardQueue;