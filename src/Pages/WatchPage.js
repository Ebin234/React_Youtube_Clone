import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from '../Components/CommentsContainer';
import RecommendVideo from '../Components/RecommendVideo';
import VideoPlayer from '../Components/VideoPlayer';
import { suggestedVideoApi, videoDetailsApi } from '../Utils/Api';


function WatchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [videoId, setVideoId] = useState(searchParams.get("id"));
  const [videoData, setVideoData] = useState({});
  const [suggestedVideo, setSuggestedVideo] = useState([]);

  useEffect(() => {
    videoDetailsApi(setVideoData, videoId);
    suggestedVideoApi(setSuggestedVideo, videoId);
  }, [videoId])

  return (
    <div className="fixed top-0 left-0 flex flex-col mt-4 pt-16 px-5   bg-[#0f0f0f] w-full h-[100vh] overflow-x-scroll">
      <div className='flex '>
        <div className='left flex-1'>
          <VideoPlayer data={videoData} />
          <CommentsContainer />
        </div>
        <div className="right px-3 overflow-y-scroll scrollbar-hide flex-[0.4] border border-[#212121]">
          {suggestedVideo?.map((data) => {
            return (
              <RecommendVideo key={data?.videoId} data={data} func={setVideoId}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default WatchPage;
