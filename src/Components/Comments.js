import React from 'react';
import User from "../Assets/userLogo.png"

const Comments = ({data}) => {
    const {name,text,replies} = data;
  return (
    <div className='flex shadow-sm p-2 bg-[#808080] rounded-lg my-2'>
      <img src={User} alt="" className='w-12 h-12' />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Comments;
