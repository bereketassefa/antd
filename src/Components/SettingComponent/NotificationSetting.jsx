import React, { useState, useContext } from "react";

function NotificationSetting() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="bg-[#F9F7F7] max-w-[505px] mt-5 mx-auto p-8">
      <div className=" flex  justify-between pl-6 mb-3">
        <h1 style={{ fontSize: 16 + myFontSize }}>Disable Notifications </h1>
        <button
          onClick={toggleMode}
          className={`flex items-center justify-center w-[60px] h-[36px] rounded-full ${
            isDarkMode ? "bg-[#56CA0F]" : "bg-[#b9acac]"
          }`}
        >
          <div
            className={`bg-gray-200 w-8 h-7 rounded-full shadow-md transform ${
              isDarkMode ? "translate-x-3" : "translate-x-1"
            }`}
          ></div>
        </button>
      </div>
    </div>
  );
}

export default NotificationSetting;
