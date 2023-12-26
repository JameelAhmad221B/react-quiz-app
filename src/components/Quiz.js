import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';
import shuffledQuestionsWithShuffledOptions from '../data/questions';

const Quiz = () => {
  const totalQuestions = shuffledQuestionsWithShuffledOptions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userSelections, setUserSelections] = useState([]);

  const handleAnswer = (selectedOption) => {
    const isCorrect = selectedOption === shuffledQuestionsWithShuffledOptions[currentQuestion].answer;
    setScore(isCorrect ? score + 1 : score);

    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
    setShowResult(nextQuestion === totalQuestions);

    const userSelection = {
      question: shuffledQuestionsWithShuffledOptions[currentQuestion].question,
      userAnswer: selectedOption,
      correctAnswer: shuffledQuestionsWithShuffledOptions[currentQuestion].answer,
    };

    setUserSelections([...userSelections, userSelection]);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setUserSelections([]);
  };

  if (showResult) {
    return <Result score={score} totalQuestions={totalQuestions} restartQuiz={restartQuiz} userSelections={userSelections} />;
  }

  return (
    <div>
      <Question
        question={shuffledQuestionsWithShuffledOptions[currentQuestion].question}
        options={shuffledQuestionsWithShuffledOptions[currentQuestion].options}
        handleAnswer={handleAnswer}
      />
    </div>
  );
};

export default Quiz;