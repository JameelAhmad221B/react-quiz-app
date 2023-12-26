import React, { useState } from 'react';
import Quiz from './components/Quiz';
import SplashScreen from './components/SplashScreen';

const App = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const startQuiz = () => {
    setShowQuiz(true);
  };

  return (
    <div className='min-h-screen bg-gray-100'>
      <div className="min-h-96 flex flex-col justify-center items-center py-24 px-4 relative">
        {showQuiz &&
          <h1 className="text-4xl font-bold mb-8 text-gray-800">JavaScript Quiz</h1>
        }
        <span className="absolute top-0 right-0 text-sm p-2 text-gray-600">
          Name: Jameel Ahmad | Roll Number: 212370053
        </span>
        <div className="bg-white rounded-lg shadow-md p-8 w-full md:w-3/4 lg:w-1/2">
          {showQuiz ? <Quiz /> : <SplashScreen startQuiz={startQuiz} />}
        </div>
      </div>
    </div>
  );
};

export default App;
