import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white dark:bg-white dark:text-black px-6 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Page not found.</p>
      <Link
        to="/"
        className="px-6 py-2 bg-cyan-500 text-white dark:text-black rounded hover:bg-cyan-600"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
