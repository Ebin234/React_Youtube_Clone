import React from "react";
import { TopMenuList } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchQuery } from "../Utils/AppSlice";

const TopMenu = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    const dispatch = useDispatch();

    const onClickHandler = (item) => {
        ;
        dispatch(changeSearchQuery(item));
    }

    return (
        <div className={"pt-16 pb-3 flex px-6 fixed top-0 left-0 bg-black overflow-x-scroll scrollbar-hide " + (isMenuOpen ? "ml-60  w-[calc(100%-240px)] z-[1]" : "z-[1] w-[100vw]")}>
            {TopMenuList?.map((item, index) => {
                return (
                    <h2
                        key={index}
                        className={"text-white font-normal text-sm py-2 px-4 break-keep whitespace-nowrap bg-[#181818] mr-3 cursor-pointer rounded-xl hover:bg-[#212121] " + (isMenuOpen ? "" : "px-8")}
                        onClick={() => onClickHandler(item)}
                    >{item}</h2>
                )
            })}
        </div>
    )
}

export default TopMenu;