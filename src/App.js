import React from "react";
import Question from "./components/Question";
import { questions } from "./questions.js";

import womanMobile from "./images/illustration-woman-online-mobile.svg";
import bgPatternMobile from "./images/bg-pattern-mobile.svg";

import womanDesktop from "./images/illustration-woman-online-desktop.svg";
import boxDesktop from "./images/illustration-box-desktop.svg";

function App() {
  const mappingQuestions = questions.map((eachQuestion) => {
    return (
      <Question
        key={eachQuestion.id}
        question={eachQuestion.question}
        answer={eachQuestion.answer}
      />
    );
  });

  return (
    <div className="App">
      <div className="container">
        <div className="image-container-mobile">
          <img
            className="mobile-main-image img"
            src={womanMobile}
            alt="illustration"
          />
          <img
            className="mobile-shadow img"
            src={bgPatternMobile}
            alt="shadow-pattern"
          />
        </div>

        <div className="desktop-box">
          <img
            className="desktop-box-image"
            src={boxDesktop}
            alt="box-pattern"
          />
        </div>

        <div className="image-container-desktop">
          <img
            className="desktop-main-image img"
            src={womanDesktop}
            alt="illustration"
          />
        </div>

        <div className="text-box">
          <h1 className="title">FAQ</h1>
          {mappingQuestions}
        </div>
      </div>
      <footer className="attribution">
        Challenge by &nbsp;
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by &nbsp;
        <a href="https://github.com/comendrun"> Kamran Rouhani</a>.
      </footer>
    </div>
  );
}

export default App;
