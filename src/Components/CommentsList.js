import React from 'react'
import Comments from "./Comments";

function CommentsList({comments}) {
  // console.log(comments)
  return (
      comments.map((item,index)=>{
        return(
        <div key={index} >
            <Comments data={item} />
            <div className="pl-15 ml-5">
            <CommentsList comments={item?.replies} />
            </div>
        </div>
        )})
    
  )
}

export default CommentsList;
