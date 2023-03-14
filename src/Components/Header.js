import React from "react";
import Logo from "../Assets/logo.png";
import UserLogo from "../Assets/userLogo.png"
import {HiMagnifyingGlass, HiOutlineBars3} from "react-icons/hi2"
import {MdMic} from "react-icons/md"

const Header = ()=>{
    return(
        <div className="bg-[#0f0f0f] h-14 pl-4 pr-5 flex justify-between items-center fixed w-full z-10">
            <div className="flex justify-between items-center">
                <div className="text-[#f1f1f1] p-2 w-10 text-2xl text-center hover:bg-[#272727] rounded-full cursor-pointer">
                    <HiOutlineBars3 />
                </div>
                <div className="py-5 w-32 pr-3">
                    <img src={Logo} alt="" className="object-contain"/>
                </div>
            </div>
            <div className="h-10 flex flex-row items-center">
                <div className=" bg-[#0f0f0f] flex text-white items-center   ">
                    <div className=" h-8 w-[493px] flex items-center  border border-[#272727] rounded-l-3xl">
                    <input type="text" placeholder="Search" className="w-full bg-[#0f0f0f] h-6 ml-6 text-start focus:outline-none pl-4" />
                    </div>
                    <button className="w-12 h-8 bg-[#272727]  py-0.5 rounded-r-3xl border-l-2 border-[#272727]">
                        <HiMagnifyingGlass size={22} className="inline-block text-center font-thin" />
                    </button>
                    <div className="ml-3 w-8 flex items-center pl-1 h-8 border border-[#272727] rounded-full text-xl">
                        <MdMic />
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                <img src={UserLogo} alt="" className=" h-10 object-contain" />
            </div>
            
        </div>
    )
}

export default Header;