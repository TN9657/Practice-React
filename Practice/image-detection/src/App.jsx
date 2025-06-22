import React from 'react';
import ImageDetector from './components/ImageDetector';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-5xl">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">
          🧠 AI Image Detection with TensorFlow
        </h1>
        <ImageDetector />
      </div>
    </div>
  );
};

export default App;
