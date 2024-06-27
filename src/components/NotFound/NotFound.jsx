import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            404 - Page Not Found
          </h1>
          <p className="mt-4 text-gray-600">
            The page you are looking for does not exist.
          </p>
          <Link
            to="/"
            className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Go to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
