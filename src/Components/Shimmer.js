import React from 'react';

function Shimmer() {
  return (
    <>
      {Array(20).fill(" ")?.map((e, i) => (
        <div key={i} className='bg-[#ddd] w-[240px] h-[290px] p-5 box-border rounded-[10px] animate-pulse'>
          <div className='w-full mb-6 h-[130px] bg-[#bbb]  rounded-[5px]'></div>
          <div className='w-full mb-6 h-8 bg-[#bbb]  rounded-[5px]'></div>
          <div className='w-full mb-6 h-8 bg-[#bbb]  rounded-[5px]'></div>
        </div>
      ))}
    </>
  )
}

export default Shimmer;