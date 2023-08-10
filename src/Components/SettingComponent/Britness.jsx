import React, { useState, useEffect } from "react";
import day from "../../assets/image/light mode.png";
import night from "../../assets/image/dark mode.png";

const Britness = () => {
 
  return (
    <di
      className="  flex flex-col items-center justify-center md:justify-center  lg:flex-row lg:justify-start my-4 gap-10 p-8"
    >
      <div className=" flex items-center flex-col justify-center border-2 border-slate-200 p-1">
        <img src={day} alt="day" className="object-contain" />
        <label>
          <input type="radio" name="mode" value="dark" />
          Light Mode
        </label>
      </div>

      <div className=" flex items-center flex-col justify-center border-2 border-slate-200 p-2">
        <img src={night} alt="night" className="object-contain" />
        <label>
          <input type="radio" name="mode" value="dark" />
          Dark mode
        </label>
      </div>
      
    </di>
  );
};

export default Britness;



