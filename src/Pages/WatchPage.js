import React from 'react';
import CommentsContainer from '../Components/CommentsContainer';
import RecommendVideo from '../Components/RecommendVideo';
import VideoPlayer from '../Components/VideoPlayer';


function WatchPage() {
  return (
    <div className="fixed top-0 left-0 flex flex-col mt-4 pt-16 px-5   bg-[#0f0f0f] w-full h-[100vh] overflow-x-scroll">
      <div className='flex '>
      <div className='left flex-1'>
        <VideoPlayer />
        <CommentsContainer />
      </div>
      <div className="right px-3 overflow-y-scroll scrollbar-hide flex-[0.4] border border-[#212121]">
        <RecommendVideo />
        <RecommendVideo />
        <RecommendVideo />
        <RecommendVideo />
        <RecommendVideo />
        <RecommendVideo />
        <RecommendVideo />
        <RecommendVideo />
        <RecommendVideo />
        <RecommendVideo />
        <RecommendVideo />
        <RecommendVideo />
        <RecommendVideo />
        <RecommendVideo />
        <RecommendVideo />
        <RecommendVideo />
        <RecommendVideo />
        <RecommendVideo />
      </div>
     </div>
    </div>
  )
}

export default WatchPage;
