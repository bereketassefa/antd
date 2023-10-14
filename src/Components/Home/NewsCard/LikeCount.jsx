import React from 'react'

function LikeCount() {
  return (
    <div>
      {" "}
      <span
        className="dark:text-white text-smallP md:text-midP lg:text-largeP cursor-pointer "
        // onClick={() => setShowLikeInfo(true)}
      >
        {likeCount === 0 || likeCount === "0" ? "" : likeCount}
      </span>
      t
    </div>
  );
}

export default LikeCount