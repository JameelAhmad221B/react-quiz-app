import React, { useState } from 'react';
import Quiz from './components/Quiz';
import SplashScreen from './components/SplashScreen';

const App = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const startQuiz = () => {
    setShowQuiz(true);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-12 px-4 relative">
      <span className="absolute top-0 right-0 text-sm p-2 text-gray-600">
        Name: Jameel Ahmad | Roll Number: 212370053
      </span>
      <div className="bg-white rounded-lg shadow-md p-8 w-full md:w-3/4 lg:w-1/2">
        {showQuiz ? <Quiz /> : <SplashScreen startQuiz={startQuiz} />}
      </div>
    </div>
  );
};

export default App;