import React, { useEffect, useState } from 'react';
import { MdVerified } from 'react-icons/md';
import { Link, useSearchParams } from 'react-router-dom';
import CommentsContainer from '../Components/CommentsContainer';
import RecommendVideo from '../Components/RecommendVideo';
import VideoPlayer from '../Components/VideoPlayer';
import { suggestedVideoApi, videoDetailsApi } from '../Utils/Api';


function WatchPage() {

  const [searchParams,setSearchParams] = useSearchParams();
  console.log("new videoId",searchParams.get("id"))
  // const videoId = searchParams.get("id");
  const [videoId,setVideoId] =useState(searchParams.get("id"))
  // setVideoId(searchParams.get("id"))

  const [videoData,setVideoData] = useState({})
  const [suggestedVideo,setSuggestedVideo] = useState([])
  useEffect(()=>{
    videoDetailsApi(setVideoData,videoId);
    suggestedVideoApi(setSuggestedVideo,videoId)
  },[videoId])

  // const onclickHandler = (id)=>{
  //   setVideoId(id)
  //   // setSearchParams(id)
  // }


  return (
    <div className="fixed top-0 left-0 flex flex-col mt-4 pt-16 px-5   bg-[#0f0f0f] w-full h-[100vh] overflow-x-scroll">
      <div className='flex '>
      <div className='left flex-1'>
        <VideoPlayer data={videoData}/>
        <CommentsContainer />
      </div>
      <div className="right px-3 overflow-y-scroll scrollbar-hide flex-[0.4] border border-[#212121]">
        {suggestedVideo?.map((data)=>{
          return(
        <RecommendVideo key={data.video.videoId} data={data} func={setVideoId}
        />
        // <div key={data?.video?.videoId} className='py-4' onClick={()=>onclickHandler(data?.video?.videoId)}>
        //   <Link to={"/watch?id="+data?.video?.videoId}>
        //   <div className="text-white flex cursor-pointer">
        //     <img src={data?.video?.thumbnails[0].url} alt="" className='h-22 w-44 rounded-lg object-contain' />
        //     <div className="pl-2">
        //       <h2 className="text-sm font-medium">{data?.video?.title}</h2>
        //       <p className="text-xs text-[#808080] pt-2 flex items-center">
        //         {data?.video?.author?.title}
        //         <span className="p-1">
        //           {data?.video?.author?.badges[0]?.text && <MdVerified />}
        //         </span>
        //       </p>
        //       <div className="flex">
        //         <p className="text-xs text-[#808080] pr-1">{data?.video?.stats?.views/1000} views</p>
        //         <p className="text-xs text-[#808080] pr-1">{data?.video?.publishedTimeText}</p>
        //       </div>
        //     </div>
        //   </div>
        //   </Link>
        // </div>
        )
        })}
      </div>
     </div>
    </div>
  )
}

export default WatchPage;
