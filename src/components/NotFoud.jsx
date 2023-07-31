import React from 'react';

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-5xl font-semibold text-purple-900 mb-4">Oops!</h1>
        <p className="text-lg text-gray-800 mb-4">Disculpa, ha ocurrido un error</p>
        <p className="text-gray-500 italic text-2xl">Not Found 404</p>
      </div>
    </div>
  );
}

export default NotFound;
