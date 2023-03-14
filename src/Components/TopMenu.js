import React from "react";
import {TopMenuList} from "../Utils/data";

const TopMenu = () =>{
    return (
        <div className="pt-16 pb-3 ml-60 fixed top-0 left-0 flex px-3 overflow-x-scroll scrollbar-hide bg-black w-[calc(100%-240px)]">
            {TopMenuList.map((item,index)=>{
                return (
                    <h2
                    key={index} 
                    className="text-white font-normal text-sm py-2 px-4 break-keep whitespace-nowrap bg-[#181818] mr-3 cursor-pointer rounded-xl hover:bg-[#212121]"
                    >{item}</h2>
                )
            })}
        </div>
    )
}

export default TopMenu;