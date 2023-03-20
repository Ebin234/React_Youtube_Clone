import React from "react";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";

const VideoContainer = ({ data }) => {
    const isMenuOpen = useSelector((state => state.app.isMenuOpen));

    return (
        <div
            className={" bg-black h-full w-full pt-[7.5rem] pl-3 flex overflow-y-scroll scrollbar-hide " + (isMenuOpen ? "ml-60 fixed top-0 left-0" : "")}
        >
            <VideoCard data={data} />
        </div>
    )
}

export default VideoContainer;