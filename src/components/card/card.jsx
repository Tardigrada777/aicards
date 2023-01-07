import React, { useState } from "react";
import "./card.css";

const Back = ({ card, onFeedback }) => {
  return <div className="card tile-back">
    <div className="card-body">
      <div className="question_texts">
        <div className="answer__box">
          <p className="answer__enter">{card.back}</p>
        </div>
        <div className="button__answer">
          <button href="./" className="answer__hard" onClick={() => onFeedback(card, 'hard')}>
            hard
          </button>
          <button href="./" className="answer__good" onClick={() => onFeedback(card, 'good')}>
            good
          </button>
          <button href="./" className="answer__normal" onClick={() => onFeedback(card, 'normal')}>
            normal
          </button>
          <button href="./" className="answer__easy" onClick={() => onFeedback(card, 'easy')}>
            Easy
          </button>
        </div>
      </div>
    </div>
  </div>;
};

const Front = ({ text, onClick }) => {
  return (
    <div className="card tile-front" onClick={() => onClick()}>
      <div className="question_text">{text}</div>
    </div>
  );
};

const CardQuestion = ({ card, onFeedback }) => {
  const [side, setSide] = useState('front');

  return side === 'front'
    ? <Front text={card.front} onClick={() => setSide('back')} />
    : <Back card={card} onFeedback={onFeedback} />;
};

export default CardQuestion;
