import React from "react";

import "./style.scss";

const PostHeader = props => (
  <div className="postHeader">
    <img src={props.post.filePath} />
    <div className="indents">
      <strong>{props.post.name}</strong>
      <strong>{props.post.time}</strong>
    </div>
  </div>
);

export default PostHeader;
