import React from 'react';
import CommentsList from './CommentsList';
import {CommentsData} from "../Utils/Constants";

function CommentsContainer() {
  return (
    <div >
      <h1 className="text-2xl font-bold text-white">
        Comments:
      </h1>
      <CommentsList comments={CommentsData} />
      </div>
  )
}

export default CommentsContainer;
