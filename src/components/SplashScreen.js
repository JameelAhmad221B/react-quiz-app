import React from 'react';

const SplashScreen = ({ startQuiz }) => {
  return (
    <div className="min-h-3/4 flex flex-col justify-center items-center py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Welcome to the Quiz!</h1>
      <button
        onClick={startQuiz}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default SplashScreen;