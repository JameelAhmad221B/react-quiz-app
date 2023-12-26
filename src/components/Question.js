import React from 'react';

const Question = ({ question, options, handleAnswer }) => {
  const handleOptionClick = (option) => {
    handleAnswer(option);
  };

  return (
    <div className="question">
      <h3 className="text-lg font-semibold mb-4">{question}</h3>
      <ul>
        {options.map((option, index) => (
          <li key={index} className="mb-2">
            <button
              className="w-1/2 bg-blue-500 text-white px-4 py-2 rounded-md text-left"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;