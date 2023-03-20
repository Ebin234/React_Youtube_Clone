import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import LiveChat from '../Components/LiveChat';
import VideoPlayer from "../Components/VideoPlayer";
import { videoDetailsApi } from '../Utils/Api';

function LivePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [videoId, setVideoId] = useState(searchParams.get("id"));
  const [videoData, setVideoData] = useState({});

  useEffect(() => {
    videoDetailsApi(setVideoData, videoId);
  }, [])

  return (
    <div className="fixed top-0 left-0 flex flex-col mt-4 pt-16 px-5   bg-[#0f0f0f] w-full h-[100vh] overflow-x-scroll">
      <div className='flex '>
        <div className='left flex-1'>
          <VideoPlayer data={videoData} />
        </div>
        <div className="right px-3 overflow-y-scroll scrollbar-hide flex-[0.4]">
          <LiveChat />
        </div>
      </div>
    </div>
  )
}

export default LivePage;
