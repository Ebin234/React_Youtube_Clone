import React from 'react';
import { MdVerified } from 'react-icons/md';
import { Link } from 'react-router-dom';

function RecommendVideo({ data, func }) {

  return (
    <>
      <div className='py-4' onClick={() => func(data?.videoId)} >
        <Link to={"/watch?id=" + data?.videoId}>
          <div className="text-white flex cursor-pointer">
            <img src={data?.thumbnail?.[0]?.url} alt="" className='h-22 w-44 rounded-lg object-contain' />
            <div className="pl-2">
              <h2 className="text-sm font-medium">{data?.title}</h2>
              <p className="text-xs text-[#808080] pt-2 flex items-center">
                {data?.channelTitle}
                <span className="p-1">
                  <MdVerified />
                </span>
              </p>
              <div className="flex">
                <p className="text-xs text-[#808080] pr-1">{data?.viewCount} views</p>
                <p className="text-xs text-[#808080] pr-1">{data?.publishedTimeText}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default RecommendVideo;
