import React from "react";
import arrowDown from "../images/icon-arrow-down.svg";

export default function Question(props) {
  const [showAnswer, setShowAnswer] = React.useState(false);

  function handleAnswerClick() {
    setShowAnswer((preValue) => {
      return !preValue;
    });
  }

  return (
    <div className="each-collapsible">
      <section className="Q-A">
        <p
          onClick={handleAnswerClick}
          className={`question ${showAnswer && "question-selected"}`}
        >
          {props.question}
          <img className="arrow-down" src={arrowDown} alt="arrow-down" />
        </p>
        <p className={`answer ${!showAnswer && "hidden"}`}>{props.answer}</p>
      </section>
      <hr className="line" />
    </div>
  );
}
