import React, { useState } from "react";
import {SideBarItems} from "../Utils/Constants";
import {useSelector} from "react-redux"

const SideBar = ()=>{
    const [selected,setSelected] = useState("Home");
    const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);

    if(!isMenuOpen) return null;

    return(
        <div 
        className="w-60 bg-black h-[calc(100vh-53px)] mt-14 fixed top-0 left-0 text-white p-3  overflow-scroll overflow-x-hidden scrollbar-hide ">
            <div className="mb-4">
                {SideBarItems.Top.map((item,index)=>{
                    return(
                <div 
                    key={index}
                    className={`h-10 flex justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-[#272727] my-1 
                    ${selected===item.name ? "bg-[#272727]" : "bg-black"}`}
                    onClick={()=>{setSelected(item.name)}}
                    >
                    <span className="mr-5">{item.icon}</span>
                    <p className="p-2 text-sm font-medium">{item.name}</p>
                </div>
                )
                })}
            </div>
            <hr className="my-2 bg-[#272727]" />
            <div className="mb-4">
                {SideBarItems.Middle.map((item,index)=>{
                    return(
                <div 
                    key={index}
                    className={`h-10 flex justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-[#272727] my-1 
                    ${selected===item.name ? "bg-[#272727]" : "bg-black"}`}
                    onClick={()=>{setSelected(item.name)}}
                    >
                    <span className="mr-5">{item.icon}</span>
                    <p className="p-2 text-sm font-medium">{item.name}</p>
                </div>
                )
                })}
            </div>
            <hr className="my-2 bg-[#272727]" />
            <h2 className="pt-1 px-3">Explore</h2>
            <div className="mb-4">
                {SideBarItems.Explore.map((item,index)=>{
                    return(
                <div 
                    key={index}
                    className={`h-10 flex justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-[#272727] my-1 
                    ${selected===item.name ? "bg-[#272727]" : "bg-black"}`}
                    onClick={()=>{setSelected(item.name)}}
                    >
                    <span className="mr-5">{item.icon}</span>
                    <p className="p-2 text-sm font-medium">{item.name}</p>
                </div>
                )
                })}
            </div>
            <hr className="my-2 bg-[#272727]" />
        </div>
    )
}

export default SideBar;