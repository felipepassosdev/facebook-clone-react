import React from 'react';
import PostHeader from './PostHeader';
import PostComments from './PostComents';


function PostItem({ author, date, content, comments, image }) {
  return (
    <div className="post">
      <PostHeader author={author} date={date} />
      <p className="post-content">{content}</p>
      <div>
        <img className="img-responsive" src={image}></img>
      </div>
      <PostComments comments={comments} />
    </div>
  );
}

export default PostItem;
