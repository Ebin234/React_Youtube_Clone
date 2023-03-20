import React from "react";
import { MdVerified } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import Logo from "../Assets/userLogo.png";

const VideoCard = ({ data }) => {
    const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

    return (
        <div className={"flex flex-wrap " + (isMenuOpen ? "gap-10 " : "gap-8 ")}>
            {data?.length !== 0 ? data?.map((card, index) => {
                return (
                    <Link key={index} to={card?.lengthText ? "/watch?id=" + card?.videoId : "/live?id=" + card?.videoId}>
                        <div className="flex flex-col max-w-[240px] cursor-pointer">
                            <div className="relative w-full">
                                <img
                                    src={card?.thumbnail?.[0]?.url}
                                    alt="video image"
                                    className="w-full h-full overflow-hidden rounded-2xl"
                                />
                                <p className="absolute right-2 top-[85%] px-1 text-xs bg-black text-white rounded">
                                    {card?.lengthText}
                                </p>
                            </div>
                            <div className="flex mt-3">
                                <img
                                    src={card?.channelThumbnail?.[0]?.url ? card?.channelThumbnail?.[0]?.url : Logo}
                                    alt="channel logo"
                                    className="h-9 w-9 rounded-full"
                                />
                                <div className="ml-2">
                                    <h2 className="font-medium text-white mt-0 text-sm mb-0 items-center">
                                        {card?.title}
                                    </h2>
                                    <h3 className="text-[#808080] text-xs mt-1 flex items-center">
                                        {card?.channelTitle}
                                        <span className="p-1">
                                            <MdVerified />
                                        </span>
                                    </h3>
                                    <p className="text-[#808080] m-0 font-medium text-xs">
                                        {card?.viewCount} . {card?.publishedText}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
                : <Shimmer />}
        </div>
    )
}

export default VideoCard;