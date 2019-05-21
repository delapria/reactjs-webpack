import React, { Component, Fragment } from "react";
import PostHeader from "./PostHeader";

import "./style.scss";

const Post = props => (
  <div className="post">
    <PostHeader post={props.post} />
    <p>{props.post.textPost} </p>
  </div>
);

export default Post;
