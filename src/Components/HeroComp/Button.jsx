import React from "react";

const Button = ({
  text,
  width,
  py,
  bg,
  color,
  bgHover,
  textHover,
  id,
  onClick,
  disable,
  imgsrc,
}) => {
  return (
    <button
      className={` border-2  rounded-3xl ${
        disable ? "cursor-not-allowed bg-gray-500" : bg
      } text-${color} text-center ${
        disable ? "" : bgHover
      } hover:text-${textHover}    duration-500 hover:filter`}
      style={{
        width: `${width}px`,
        padding: `${py}px 18px`,
      }}
      id={id}
      onClick={onClick}
      disabled={disable}
    >
      {/* {console.log(text)} */}
      {/* {translate(text)} */}
      {/* <img src={imgsrc}  /> */}
      {`${text}`}
    </button>
  );
};

// Button.defaultProps = {
//   bg: "bg-addispink",
//   color: "white",
//   py: 6,
//   // width: 140,
// };

export default Button;
