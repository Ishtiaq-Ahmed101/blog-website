import React from 'react';

const Loader = () => {
    console.log("runing the loader")
  return (
    <div className="w-full flex flex-row items-center justify-center self-center overflow-hidden bg-gray-800 ">
      <div className="spinner-border text-primary" role="status">
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="(link unavailable)" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="12" fill="white" />
          <path className="text-primary" fill="currentColor" d="M4 12a8 8 0 018-8v1a3.99 3.99 0 014 0h4.01" />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
export default Loader;