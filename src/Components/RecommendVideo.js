import React from 'react';
import Thumbnail from "../Assets/thumbnail.jpg";
import { MdVerified } from 'react-icons/md';

function RecommendVideo() {
  return (
    <>
    <div className='py-4'>
          <div className="text-white flex cursor-pointer">
            <img src={Thumbnail} alt="" className='h-22 w-44 rounded-lg object-contain' />
            <div className="pl-2">
              <h2 className="text-sm font-medium">Vaa Vaathi</h2>
              <p className="text-xs text-[#808080] pt-2 flex items-center">
                Ebin Yesudas 
                <span className="p-1">
                  <MdVerified />
                </span>
              </p>
              <div className="flex">
                <p className="text-xs text-[#808080] pr-1">200k views</p>
                <p className="text-xs text-[#808080] pr-1">jan 1</p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default RecommendVideo;
