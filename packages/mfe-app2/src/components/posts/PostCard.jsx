import React from "react";

const PostCard = (props) => {
  return (
    <div data-testid="result-card">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">{props.title}</h2>
        </div>
        <div className="card-body">
          <p className="card-text">{props.body}.</p>
          <p className="card-text card-author">{props.username}</p>
        </div>
      </div>
    </div>
  );
};
export default PostCard;
