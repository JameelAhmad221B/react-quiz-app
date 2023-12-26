import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';
import shuffledQuestionsWithShuffledOptions from '../data/questions';

const Quiz = () => {
  const totalQuestions = shuffledQuestionsWithShuffledOptions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    const isCorrect = selectedOption === shuffledQuestionsWithShuffledOptions[currentQuestion].answer;
    setScore(isCorrect ? score + 1 : score);

    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
    setShowResult(nextQuestion === totalQuestions);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return <Result score={score} totalQuestions={totalQuestions} restartQuiz={restartQuiz} />;
  }

  return (
    <div>
      <Question
        question={shuffledQuestionsWithShuffledOptions[currentQuestion].question}
        options={shuffledQuestionsWithShuffledOptions[currentQuestion].options}
        handleAnswer={handleAnswer}
      />

      <div className="mt-8 flex justify-between">
        <button
          onClick={() => setCurrentQuestion(Math.max(currentQuestion - 1, 0))}
          className={`bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md ${currentQuestion === 0 && 'opacity-50 cursor-not-allowed'}`}
          disabled={currentQuestion === 0}
        >
          Previous
        </button>

        <button
          onClick={() => handleAnswer()}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;