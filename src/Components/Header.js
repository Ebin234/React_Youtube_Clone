import React, { useEffect, useState } from "react";
import Logo from "../Assets/logo.png";
import UserLogo from "../Assets/userLogo.png";
import { HiMagnifyingGlass, HiOutlineBars3 } from "react-icons/hi2";
import { MdMic } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/AppSlice";
import { searchSuggestionApi } from "../Utils/Api";
import { changeSearchQuery } from "../Utils/AppSlice";
import { AiOutlineClose } from "react-icons/ai";
import { cacheData } from "../Utils/SearchSlice";
import { Link } from "react-router-dom";

const Header = () => {
    const dispatch = useDispatch();
    const [showSearchQuery, setShowSearchQuery] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const searchCache = useSelector((store) => store.search);

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    const searchQueryHandler = (data) => {
        setSearchQuery(data);
        setShowSearchQuery(false);
        dispatch(changeSearchQuery(data));
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSearchSuggestions(searchCache[searchQuery]);
            } else {
                searchSuggestionApi(setSearchSuggestions, searchQuery);
                dispatch(cacheData({ [searchQuery]: searchSuggestions }));
            }
        }, 200)
        return (() => clearTimeout(timer));
    }, [searchQuery])

    return (
        <div className="bg-[#0f0f0f] h-14 pl-4 pr-5 flex justify-between items-center fixed w-full z-10">
            <div className="flex justify-between items-center">
                <div className="text-[#f1f1f1] p-2 w-10 text-2xl text-center hover:bg-[#272727] rounded-full cursor-pointer"
                    onClick={() => toggleMenuHandler()}
                >
                    <HiOutlineBars3 />
                </div>
                <Link to={"/"} className="py-5 w-32 pr-3">
                    <img src={Logo} alt="youtube logo" className="object-contain" onClick={()=>dispatch(changeSearchQuery("New"))} />
                </Link>
            </div>
            <div className="h-10 flex flex-row items-center">
                <div className=" bg-[#0f0f0f] flex text-white items-center">
                    <div>
                        <div className=" h-8 w-[493px] flex flex-col items-center  border border-[#272727] rounded-l-3xl">
                            <input type="text" placeholder="Search" className="w-full bg-[#0f0f0f] h-6 ml-6 text-start focus:outline-none pl-4"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e?.target?.value)}
                                onFocus={() => setShowSearchQuery(true)}
                            />
                            {showSearchQuery && <AiOutlineClose size={21} className="w-8 absolute right-[26rem] top-[18px]"
                                onClick={() => {
                                    setSearchQuery("");
                                    setShowSearchQuery(false);
                                }} />}
                        </div>
                        {showSearchQuery && <div className="bg-white absolute top-12 ml-2 w-[485px] rounded-md">
                            {searchSuggestions?.map((data, index) => {
                                return (
                                    <div key={index} className="flex items-center pl-4 text-black hover:bg-[#e4e1e1] rounded-md "
                                        onClick={() => searchQueryHandler(data)}
                                    >
                                        <HiMagnifyingGlass size={15} className="inline-block text-center font-thin" />
                                        <p className="pl-2">{data}</p>
                                    </div>)
                            })}
                        </div>}
                    </div>
                    <button className="w-12 h-8 bg-[#272727]  py-0.5 rounded-r-3xl border-l-2 border-[#272727]"
                        onClick={() => searchQueryHandler(searchQuery)}
                    >
                        <HiMagnifyingGlass size={22} className="inline-block text-center font-thin" />
                    </button>
                    <div className="ml-3 w-8 flex items-center pl-1 h-8 border border-[#272727] rounded-full text-xl">
                        <MdMic />
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                <img src={UserLogo} alt="user logo" className=" h-10 object-contain" />
            </div>
        </div>
    )
}

export default Header;