import React from "react";
import "./CardQuestion.css";

const CardQuestion = () => {
  return (
    <div className="ouestion__page">
      <div className="container">
        <input type="checkbox" id="test" />
        <label for="test">
          <div class="reversible">
            <div class="card tile-back">
              <div class="card-body">
                <p className="qouestiom__nubmer">Question 1</p>
                <div className="ouestion__text">
                  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                  Lorem Lorem
                </div>
              </div>
            </div>
            <div class="card tile-front">
              <div class="card-body">
                <p className="qouestiom__nubmer">Question 1</p>
                <div className="ouestion__texts">
                  <h2 className="answer">Answer:</h2>
                  <div className="answer__box">
                    <p className="answer__enter">
                      Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                      Lorem Lorem Lorem
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
