import React from "react";

const Heading = ({ head, headtwo, para }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="150"
      data-aos-delay="100"
      className="mx-auto my-12 max-w-7xl px-4 text-center sm:px-8 md:px-20 lg:px-32 "
    >
      <h1 className=" text-2xl font-medium uppercase sm:text-3xl">
        {head} <span className="text-addispink">{headtwo}</span>
      </h1>
      <div className=" mx-auto my-4 w-32 rounded-full border-b-4 border-addispink" />
      <p className="text-sm md:text-base ">{para}</p>
    </div>
  );
};

Heading.defaultProps = {
  // head: "Default Heading",
  // para: "lorem ipsum default paragraph here, please insert your content here!",
};

export default Heading;
