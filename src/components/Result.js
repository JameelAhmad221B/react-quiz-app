import React from 'react';

const Result = ({ score, totalQuestions, restartQuiz, userSelections }) => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Quiz Result</h2>
      <p className="text-lg mb-4 text-center">
        Your Score is: <span className="font-semibold">{score}</span>/
        <span className="font-semibold">{totalQuestions}</span>
      </p>
      <div className="mt-6">
        <ul className="space-y-4">
          {userSelections.map((selection, index) => (
            <li
              key={index}
              className={`p-4 rounded-lg ${selection.userAnswer === selection.correctAnswer
                  ? 'bg-green-100'
                  : 'bg-red-100'
                }`}
            >
              <p className="mb-2">
                <strong>Question:</strong> {selection.question}
              </p>
              <p className="mb-2">
                <strong>Your Answer:</strong> {selection.userAnswer}
              </p>
              <p>
                <strong>Correct Answer:</strong> {selection.correctAnswer}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={restartQuiz}
        className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md block mx-auto"
      >
        Start Again
      </button>
    </div>
  );
};

export default Result;