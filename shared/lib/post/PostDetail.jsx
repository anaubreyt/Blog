// PostDetail.jsx

import React from 'react';
import './PostDetail.css';

const PostDetail = ({ post }) => {
  return (
    <div className="post-detail">
      <div className="post-content">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export { PostDetail };