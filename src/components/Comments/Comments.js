import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;
  console.log("comments" + comments);
  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data (DONE 5:38)*/}

      {comments.map((obj, index) => {
        return <Comment key={index} comment={obj} />
      })}
    </div>
  );
};

export default Comments;
