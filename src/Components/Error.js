import React from 'react';
import { useRouteError } from 'react-router-dom';

function Error() {
  const data = useRouteError();

  return (
    <div className='bg-[#0f0f0f] w-[100vw] h-[100vh] text-white flex flex-col justify-center items-center'>
      <h1 className='font-black text-[10rem]'>{data?.status}</h1>
      <h2 className='font-[cursive] font-bold text-[8rem]'>{data?.statusText}</h2>
    </div>
  )
}

export default Error;
