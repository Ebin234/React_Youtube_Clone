import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { BiDislike } from 'react-icons/bi';
import { HiDotsHorizontal, HiDownload } from 'react-icons/hi';
import { RiShareForwardLine } from "react-icons/ri";
import Logo from "../Assets/userLogo.png";

function VideoPlayer({ data }) {

  return (
    <>
      <div className="flex">
        <iframe width="900" height="500"
          src={`https://www.youtube.com/embed/${data?.id}`}
          title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
        </iframe>
      </div>
      <h2 className='text-white font-semibold mt-3 mb-1 text-lg'>{data?.title}</h2>
      <div className='flex pb-8'>
        <div className="flex items-center">
          <img
            src={data?.author?.avatar?.[0].url ? data?.author?.avatar?.[0].url : Logo}
            alt="Youtube Channel"
            className='w-10 h-10 rounded-full '
          />
          <div className="px-3">
            <h3 className="text-white font-medium text-base">{data?.channelTitle}</h3>
            <p className='text-sm text-[#808080]'>100k</p>
          </div>
          <button className="bg-[#f1f1f1] px-4 py-2 rounded-3xl text-sm font-medium ml-3">
            Subscribe
          </button>
          <div className="flex pl-28">
            <div className="flex bg-[#272727] items-center rounded-2xl h-10 mx-1 hover:bg-[#212121]">
              <div className="flex px-3 items-center border-r-2 border-r-[#212121] cursor-pointer">
                <AiFillLike className="text-white text-2xl" />
                <p className="text-white pl-2 pr-3 text-sm font-semibold">
                  100K
                </p>
              </div>
              <div className="cursor-pointer pl-4 pr-5">
                <BiDislike className="text-[22px] font-extralight text-white" />
              </div>
            </div>
            <div className="flex bg-[#272727] items-center rounded-2xl h-10 mx-1 cursor-pointer hover:bg-[#212121]">
              <div className="flex px-3 items-center cursor-pointer">
                <RiShareForwardLine className="text-2xl text-white font-thin" />
                <p className="text-white pl-2 pr-3 text-sm font-semibold">
                  Share
                </p>
              </div>
            </div>
            <div className="flex bg-[#272727] items-center rounded-2xl h-10 mx-1 cursor-pointer hover:bg-[#212121]">
              <div className="flex px-3 items-center cursor-pointer">
                <HiDownload className="text-2xl text-white font-thin" />
                <p className="text-white pl-2 pr-3 text-sm font-semibold">
                  Download
                </p>
              </div>
            </div>

            <div className="flex bg-[#272727] hover:bg-[#212121] cursor-pointer items-center rounded-full justify-center w-10 h-10 text-white">
              <HiDotsHorizontal />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoPlayer;
