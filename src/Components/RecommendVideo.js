import React from 'react';
import { MdVerified } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeVideoId } from '../Utils/AppSlice';

function RecommendVideo({data,func}) {
  // const dispatch = useDispatch();
  // const onclickHandler =()=>{
  //   useDispatch(changeVideoId(data?.video?.videoId));
  // }


  return (
    <>
    
    <div className='py-4' onClick={()=>func(data?.video?.videoId)} >
    <Link to={"/watch?id="+data?.video?.videoId}>
          <div className="text-white flex cursor-pointer">
            <img src={data?.video?.thumbnails[0].url} alt="" className='h-22 w-44 rounded-lg object-contain' />
            <div className="pl-2">
              <h2 className="text-sm font-medium">{data?.video?.title}</h2>
              <p className="text-xs text-[#808080] pt-2 flex items-center">
                {data?.video?.author?.title}
                <span className="p-1">
                  {data?.video?.author?.badges[0]?.text && <MdVerified />}
                </span>
              </p>
              <div className="flex">
                <p className="text-xs text-[#808080] pr-1">{data?.video?.stats?.views/1000} views</p>
                <p className="text-xs text-[#808080] pr-1">{data?.video?.publishedTimeText}</p>
              </div>
            </div>
          </div>
        
        </Link>
        </div>
    </>
  )
}

export default RecommendVideo;
