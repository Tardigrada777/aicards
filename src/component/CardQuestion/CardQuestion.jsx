import React from "react";
import "./CardQuestion.css";

const CardQuestion = () => {
  return (
    <div className="question__page">
      <div className="container">
        <input type="checkbox" id="test" />
        <label for="test">
          <div class="reversible">
            <div class="card tile-back">
              <div class="card-body">
                <p className="question_number">Question 1</p>
                <div className="question_text">
                  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                  Lorem Lorem
                </div>
              </div>
            </div>
            <div class="card tile-front">
              <div class="card-body">
                <p className="question_number">Question 1</p>
                <div className="question_texts">
                  <h2 className="answer">Answer:</h2>
                  <div className="answer__box">
                    <p className="answer__enter">
                      Answer Answer Answer Answer Answer Answer Answer Answer
                      Answer Answer
                    </p>
                  </div>
                  <div className="button__answer">
                    <a href="./" className="answer__hard">
                      hard
                    </a>
                    <a href="./" className="answer__good">
                      good
                    </a>
                    <a href="./" className="answer__normal">
                      normal
                    </a>
                    <a href="./" className="answer__easy">
                      Easy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default CardQuestion;
