import React from "react";

export default function Button({ text, bgColor, disabled, onClick, hover, isLoading }) {
  return (
    <>
      <button
        className={` md:mt-10 md:mb-7 mt-8 mb-8 rounded-lg w-full uppercase text-[20px] md:text-[20px] font-medium p-2 md:p-2 text-white duration-500 
        ${bgColor} flex justify-center items-center`}
        type="submit"
        disabled={disabled}
        onClick={onClick}
        hover={disabled}
      >
        {isLoading ? (
          <div className="spinner"></div>
        ) : (
          text
        )}
      </button>
      <style jsx>{`
        .spinner {
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top: 4px solid white;
          width: 24px;
          height: 24px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}


