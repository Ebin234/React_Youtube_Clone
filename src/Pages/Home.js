import React, { useEffect, useState } from "react";
import SideBar from "../Components/SideBar";
import TopMenu from "../Components/TopMenu";
import VideoContainer from "../Components/VideoContainer";
import axios from "axios";
import {YOUTUBE_API_BASEURL} from "../Utils/Constants"
import SearchResultsContainer from "../Components/SearchResultsContainer";
import { searchData } from "../Utils/Api";
const Home = () =>{
    const [data,setData] = useState([]);

    useEffect(()=>{
        searchData(setData);
    },[])
    

    
    return(
        <>
        <div className="flex scrollbar-hide">
        <SideBar />
        <div className="scrollbar-hide">
        <TopMenu />
        <VideoContainer data={data}/>
        </div>
        </div>
        {/* <SearchResultsContainer /> */}
        </>
    )
}

export default Home;