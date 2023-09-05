function LikeInfo({ likeInfo }) {
    return (
      <div className="likeInfoContainer">
        {likeInfo.map((user, index) => (
          <div key={index} className="likeInfoUser">
            <img src={user.image} alt="User" />
            <span>{user.name}</span>
          </div>
        ))}
      </div>
    );
  }
  