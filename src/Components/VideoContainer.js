import React from "react";
import VideoCard from "./VideoCard";

const VideoContainer = () =>{
    return(
        <div 
        className="ml-60 mt-28 bg-black h-full w-full fixed top-0 left-0 pl-3 pt-4 flex overflow-y-scroll scrollbar-hide"
        // className="pt-12 px-5 grid grid-cols-3 gap-x-3 gap-y-8"
        >
            {/* <div className="h-[86vh]"> */}
                <VideoCard />
            {/* </div> */}
        </div>
    )
}

export default VideoContainer;