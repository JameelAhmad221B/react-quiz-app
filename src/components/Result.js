import React from 'react';

const Result = ({ score, totalQuestions, restartQuiz }) => {
  const handleRestartQuiz = () => {
    restartQuiz();
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8">
      <h2 className="text-2xl font-bold mb-4">Quiz Result:</h2>
      <p className="text-lg">
        You scored {score} out of {totalQuestions}.
      </p>
      <button
        onClick={handleRestartQuiz}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Start Again
      </button>
    </div>
  );
};

export default Result;