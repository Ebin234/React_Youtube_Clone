import React, { useState } from "react";
import { SideBarItems } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchQuery } from "../Utils/AppSlice";

const SideBar = () => {
    const [selected, setSelected] = useState("Home");
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    const searchQuery = useSelector((store) => store.app.searchQuery);
    const dispatch = useDispatch();

    const onClickHandler = (item) => {
        setSelected(item?.name);
        dispatch(changeSearchQuery(item?.name));
    }

    if (!isMenuOpen) return null;

    return (
        <div
            className="w-60 bg-black h-[calc(100vh-53px)] mt-14 fixed top-0 left-0 text-white p-3  overflow-scroll overflow-x-hidden scrollbar-hide ">
            <div className="mb-4">
                {SideBarItems?.Top?.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={`h-10 flex justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-[#272727] my-1 
                    ${selected === item?.name ? "bg-[#272727]" : "bg-black"}`}
                            onClick={() => onClickHandler(item)}
                        >
                            <span className="mr-5">{item?.icon}</span>
                            <p className="p-2 text-sm font-medium">{item?.name}</p>
                        </div>
                    )
                })}
            </div>
            <hr className="my-2 bg-[#272727]" />

            <div className="mb-4">
                {SideBarItems?.Middle?.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={`h-10 flex justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-[#272727] my-1 
                    ${selected === item?.name ? "bg-[#272727]" : "bg-black"}`}
                            onClick={() => { setSelected(item?.name) }}
                        >
                            <span className="mr-5">{item?.icon}</span>
                            <p className="p-2 text-sm font-medium">{item?.name}</p>
                        </div>
                    )
                })}
            </div>
            <hr className="my-2 bg-[#272727]" />
        </div>
    )
}

export default SideBar;