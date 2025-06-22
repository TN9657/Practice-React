import React, { useState, useRef } from 'react';
import * as mobilenet from '@tensorflow-models/mobilenet';
import '@tensorflow/tfjs';

const categoryPrefix = (label) => {
  const lower = label.toLowerCase();
  if (lower.includes('dog')) return 'DOGS';
  if (lower.includes('cat')) return 'CATS';
  if (lower.includes('bird')) return 'BIRD';
  if (lower.includes('car')) return 'CARS';
  if (lower.includes('person')) return 'HUMN';
  return 'GENR'; // General
};

const hashImage = async (file) => {
  const buffer = await file.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  return hex.substring(0, 12).toUpperCase(); // 12 chars for hash
};

const ImageDetector = () => {
  const [imageURL, setImageURL] = useState(null);
  const [results, setResults] = useState([]);
  const [imageCode, setImageCode] = useState(null);
  const imageRef = useRef();
  const fileRef = useRef();

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setImageURL(url);
    setResults([]);
    setImageCode(null);
    fileRef.current = file;
  };

  const detectImage = async () => {
    const model = await mobilenet.load();
    const predictions = await model.classify(imageRef.current);

    setResults(predictions);

    if (fileRef.current && predictions.length > 0) {
      const category = categoryPrefix(predictions[0].className);
      const hash = await hashImage(fileRef.current);
      setImageCode(category + hash);
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="file-input file-input-bordered file-input-primary w-full sm:w-auto"
        />
      </div>

      {imageURL && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-4 rounded-xl shadow-md flex justify-center items-center">
            <img
              src={imageURL}
              alt="Uploaded"
              ref={imageRef}
              onLoad={detectImage}
              className="max-h-96 rounded-lg object-contain"
              crossOrigin="anonymous"
            />
          </div>

          <div className="bg-indigo-100 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">🔍 Detected Labels</h2>
            {results.length === 0 ? (
              <p className="text-gray-600 italic">Detecting...</p>
            ) : (
              <ul className="space-y-4">
                {results.map((result, index) => (
                  <li key={index} className="bg-white rounded-md p-4 shadow">
                    <p className="font-medium text-indigo-700">Label: <span className="font-semibold">{result.className}</span></p>
                    <p className="text-gray-600">Confidence: <span className="text-green-600 font-semibold">{(result.probability * 100).toFixed(2)}%</span></p>
                  </li>
                ))}
              </ul>
            )}

            {imageCode && (
              <div className="mt-6 p-4 bg-white rounded-md shadow">
                <p className="font-semibold text-indigo-700">🆔 Image Code:</p>
                <p className="text-lg font-mono text-green-700 tracking-widest">{imageCode}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageDetector;
