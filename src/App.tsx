import React, { FC, useState } from "react";
import "./index.scss";
import Game from "./components/Game";
import Result from "./components/Result";
import questions from "./components/questions";

interface Question {
  title: string;
  variants: string[];
  correct: number;
}

const App = () => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const question = questions[step];

  const onClickVariant = (index: number) => {
    setStep(step + 1);

    if (index === questions[step].correct) {
      setCorrect(correct + 1);
    }
  };
  return (
    <div className="App">
      {step !== questions.length ? (
        <Game question={question} onClickVariant={onClickVariant} step={step} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
};

export default App;
