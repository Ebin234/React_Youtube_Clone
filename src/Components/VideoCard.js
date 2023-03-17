import React from "react";
import { MdVerified } from "react-icons/md";
import {useSelector} from "react-redux"

const VideoCard = ({data})=>{
    const isMenuOpen = useSelector((state)=>state.app.isMenuOpen);
    return(
        <div className={"flex flex-wrap " + (isMenuOpen?"gap-10":"gap-8")}>
            {data?.contents?.map((card,index)=>{
                // let timer = new Date(card?.video?.lengthSeconds * 1000);
                // let timerstr = timer.toISOString().substring(11, 19).replace(/^[0:]+/,"")
                return(
                    <div key={index} className="flex flex-col max-w-[240px] cursor-pointer">
            <div className="relative w-full">
                <img 
                src={card?.video?.thumbnails[0]?.url} 
                alt=""
                className="w-full h-full overflow-hidden rounded-2xl" 
                />
                <p className="absolute right-2 top-[85%] px-1 text-xs bg-black text-white rounded">
                    {/* {timerstr} */}
                    10:10
                </p>
            </div>
            <div className="flex mt-3">
                <img 
                src={card?.video?.author?.avatar[0].url}
                alt="" 
                className="h-9 w-9 rounded-full"
                />
                <div className="ml-2">
                    <h2 className="font-medium text-white mt-0 text-sm mb-0 items-center">
                        {card?.video?.title}
                    </h2>
                    <h3 className="text-[#808080] text-xs mt-1 flex items-center">
                        {card?.video?.author?.title}
                        <span className="p-1">
                            <MdVerified />
                        </span>
                    </h3>
                    <p className="text-[#808080] m-0 font-medium text-xs">
                        {card?.video?.stats?.views} . {card?.video?.publishedTimeText}
                    </p>
                </div>
            </div>
                    </div>
                )
            })}
        
        </div>
    )
}

export default VideoCard;