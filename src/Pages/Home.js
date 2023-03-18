import React, { useEffect, useState } from "react";
import SideBar from "../Components/SideBar";
import TopMenu from "../Components/TopMenu";
import VideoContainer from "../Components/VideoContainer";
import SearchResultsContainer from "../Components/SearchResultsContainer";
import { searchData } from "../Utils/Api";
import { useSelector } from "react-redux";

const Home = () =>{
    const [data,setData] = useState([]);
    const searchQuery = useSelector((store)=>store.app.searchQuery)

    useEffect(()=>{
        searchData(setData,searchQuery);
    },[searchQuery])
    
console.log("video data : ",data);
    
    return(
        <>
        <div className="flex scrollbar-hide">
        <SideBar />
        <div className="scrollbar-hide">
        <TopMenu />
        <VideoContainer data={data}/>
        {/* <SearchResultsContainer /> */}
        </div>
        </div>
        </>
    )
}

export default Home;