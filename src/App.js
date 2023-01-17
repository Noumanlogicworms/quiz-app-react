import { useState } from "react";
import allQuestion from "./allQuestion";
import "./App.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const handleAnswerBtnClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < allQuestion.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetBtn = () => {
    setShowScore(false);
    setCurrentQuestion(0);
    setScore(0);
  };

  return (
    <div className="App-header">
      {showScore ? (
        <div className="score-container ">
          <h3>Total Score</h3>
          <div className="score-section ">
            <p>
              You scored {score} out of {allQuestion.length}
            </p>
          </div>
          <div className="reset-btn ">
            <button onClick={resetBtn} className="buttons">
              Reset Quiz
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="app-container">
            <div className="question-section">
              <div className="question-count">
                <span className="question-no ">
                  Question {currentQuestion + 1}
                </span>
                /
                <span className="question-length ">
                  <small>{allQuestion.length}</small>
                </span>
              </div>
              <div className="question-text">
                {allQuestion[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {allQuestion[currentQuestion].answerOptions.map(
                (answerOptions) => (
                  <button
                    onClick={() =>
                      handleAnswerBtnClick(answerOptions.isCorrect)
                    }
                    className="buttons"
                  >
                    {answerOptions.answerText}
                  </button>
                )
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
