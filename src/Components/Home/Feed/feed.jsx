import React from "react";
import NewsPost from "../NewsPost/newsPost";
import NewsHolder from "../NewsHolder/newsHolder";

export default function Feed() {
  return (
    <div className="dark:bg-black w-full flex flex-col gap-2 items-start 
    justify-center ">
      <NewsPost />

      <NewsHolder />
    </div>
  );
}
