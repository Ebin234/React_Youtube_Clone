import React, { useEffect, useState } from "react";
import SideBar from "../Components/SideBar";
import TopMenu from "../Components/TopMenu";
import VideoContainer from "../Components/VideoContainer";
import { searchData } from "../Utils/Api";
import { useSelector } from "react-redux";

const Home = () => {
    const [data, setData] = useState([]);
    const searchQuery = useSelector((store) => store.app.searchQuery);

    useEffect(() => {
        setData([]);
        searchData(setData, searchQuery);
    }, [searchQuery])

    return (
        <>
            <div className="flex scrollbar-hide">
                <SideBar />
                <div className="scrollbar-hide">
                    <TopMenu />
                    <VideoContainer data={data} />
                </div>
            </div>
        </>
    )
}

export default Home;