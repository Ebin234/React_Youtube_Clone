import React from 'react';
import Thumbnail from "../Assets/thumbnail.jpg";
import Logo from "../Assets/userLogo.png";
import { MdVerified } from "react-icons/md";
import { useSelector } from 'react-redux';

function SearchResults() {
    const isMenuOpen = useSelector((state)=>state.app.isMenuOpen)
  return (
    <div className="flex flex-col w-full">
                    <div className={"flex flex-row h-40 py-4 px-2  cursor-pointer hover:bg-[#272727] " + (isMenuOpen?"w-[calc(100%-240px)]":"w-full")}>
            <div className="relative w-56">
                <img 
                src={Thumbnail} 
                alt=""
                className="w-full h-full overflow-hidden rounded-2xl" 
                />
                <p className="absolute right-2 top-[85%] px-1 text-xs bg-black text-white rounded">
                    10:12  
                </p>
            </div>
            <div className="flex mt-3 px-4">
                <img 
                src={Logo}
                alt="" 
                className="h-9 w-9 rounded-full"
                />
                <div className="ml-2">
                    <h2 className="font-medium text-white mt-0 text-sm mb-0 items-center">
                        React Youtube Clone ashcvbajscnjkhasbc ckjabshcbajscas ajksbchasbjca
                    </h2>
                    <h3 className="text-[#808080] text-xs mt-1 flex items-center">
                        Ebin Yesudas
                        <span className="p-1">
                            <MdVerified />
                        </span>
                    </h3>
                    <p className="text-[#808080] m-0 font-medium text-xs">
                        20k views . 2 Months ago
                    </p>
                </div>
            </div>
                    </div>


                    <div className="flex flex-row w-[calc(100%-240px)] h-40 py-4 px-2 cursor-pointer hover:bg-[#272727]">
            <div className="relative w-56">
                <img 
                src={Thumbnail} 
                alt=""
                className="w-full h-full overflow-hidden rounded-2xl" 
                />
                <p className="absolute right-2 top-[85%] px-1 text-xs bg-black text-white rounded">
                    10:12  
                </p>
            </div>
            <div className="flex mt-3 px-4">
                <img 
                src={Logo}
                alt="" 
                className="h-9 w-9 rounded-full"
                />
                <div className="ml-2">
                    <h2 className="font-medium text-white mt-0 text-sm mb-0 items-center">
                        React Youtube Clone ashcvbajscnjkhasbc ckjabshcbajscas ajksbchasbjca
                    </h2>
                    <h3 className="text-[#808080] text-xs mt-1 flex items-center">
                        Ebin Yesudas
                        <span className="p-1">
                            <MdVerified />
                        </span>
                    </h3>
                    <p className="text-[#808080] m-0 font-medium text-xs">
                        20k views . 2 Months ago
                    </p>
                </div>
            </div>
                    </div>
                    <div className="flex flex-row w-[calc(100%-240px)] h-40 py-4 px-2 cursor-pointer hover:bg-[#272727]">
            <div className="relative w-56">
                <img 
                src={Thumbnail} 
                alt=""
                className="w-full h-full overflow-hidden rounded-2xl" 
                />
                <p className="absolute right-2 top-[85%] px-1 text-xs bg-black text-white rounded">
                    10:12  
                </p>
            </div>
            <div className="flex mt-3 px-4">
                <img 
                src={Logo}
                alt="" 
                className="h-9 w-9 rounded-full"
                />
                <div className="ml-2">
                    <h2 className="font-medium text-white mt-0 text-sm mb-0 items-center">
                        React Youtube Clone ashcvbajscnjkhasbc ckjabshcbajscas ajksbchasbjca
                    </h2>
                    <h3 className="text-[#808080] text-xs mt-1 flex items-center">
                        Ebin Yesudas
                        <span className="p-1">
                            <MdVerified />
                        </span>
                    </h3>
                    <p className="text-[#808080] m-0 font-medium text-xs">
                        20k views . 2 Months ago
                    </p>
                </div>
            </div>
                    </div>
                    <div className="flex flex-row w-[calc(100%-240px)] h-40 py-4 px-2 cursor-pointer hover:bg-[#272727]">
            <div className="relative w-56">
                <img 
                src={Thumbnail} 
                alt=""
                className="w-full h-full overflow-hidden rounded-2xl" 
                />
                <p className="absolute right-2 top-[85%] px-1 text-xs bg-black text-white rounded">
                    10:12  
                </p>
            </div>
            <div className="flex mt-3 px-4">
                <img 
                src={Logo}
                alt="" 
                className="h-9 w-9 rounded-full"
                />
                <div className="ml-2">
                    <h2 className="font-medium text-white mt-0 text-sm mb-0 items-center">
                        React Youtube Clone ashcvbajscnjkhasbc ckjabshcbajscas ajksbchasbjca
                    </h2>
                    <h3 className="text-[#808080] text-xs mt-1 flex items-center">
                        Ebin Yesudas
                        <span className="p-1">
                            <MdVerified />
                        </span>
                    </h3>
                    <p className="text-[#808080] m-0 font-medium text-xs">
                        20k views . 2 Months ago
                    </p>
                </div>
            </div>
                    </div>
                    <div className="flex flex-row w-[calc(100%-240px)] h-40 py-4 px-2 cursor-pointer hover:bg-[#272727]">
            <div className="relative w-56">
                <img 
                src={Thumbnail} 
                alt=""
                className="w-full h-full overflow-hidden rounded-2xl" 
                />
                <p className="absolute right-2 top-[85%] px-1 text-xs bg-black text-white rounded">
                    10:12  
                </p>
            </div>
            <div className="flex mt-3 px-4">
                <img 
                src={Logo}
                alt="" 
                className="h-9 w-9 rounded-full"
                />
                <div className="ml-2">
                    <h2 className="font-medium text-white mt-0 text-sm mb-0 items-center">
                        React Youtube Clone ashcvbajscnjkhasbc ckjabshcbajscas ajksbchasbjca
                    </h2>
                    <h3 className="text-[#808080] text-xs mt-1 flex items-center">
                        Ebin Yesudas
                        <span className="p-1">
                            <MdVerified />
                        </span>
                    </h3>
                    <p className="text-[#808080] m-0 font-medium text-xs">
                        20k views . 2 Months ago
                    </p>
                </div>
            </div>
                    </div>
                    <div className="flex flex-row w-[calc(100%-240px)] h-40 py-4 px-2 cursor-pointer hover:bg-[#272727]">
            <div className="relative w-56">
                <img 
                src={Thumbnail} 
                alt=""
                className="w-full h-full overflow-hidden rounded-2xl" 
                />
                <p className="absolute right-2 top-[85%] px-1 text-xs bg-black text-white rounded">
                    10:12  
                </p>
            </div>
            <div className="flex mt-3 px-4">
                <img 
                src={Logo}
                alt="" 
                className="h-9 w-9 rounded-full"
                />
                <div className="ml-2">
                    <h2 className="font-medium text-white mt-0 text-sm mb-0 items-center">
                        React Youtube Clone ashcvbajscnjkhasbc ckjabshcbajscas ajksbchasbjca
                    </h2>
                    <h3 className="text-[#808080] text-xs mt-1 flex items-center">
                        Ebin Yesudas
                        <span className="p-1">
                            <MdVerified />
                        </span>
                    </h3>
                    <p className="text-[#808080] m-0 font-medium text-xs">
                        20k views . 2 Months ago
                    </p>
                </div>
            </div>
                    </div>
                    <div className="flex flex-row w-[calc(100%-240px)] h-40 py-4 px-2 cursor-pointer hover:bg-[#272727]">
            <div className="relative w-56">
                <img 
                src={Thumbnail} 
                alt=""
                className="w-full h-full overflow-hidden rounded-2xl" 
                />
                <p className="absolute right-2 top-[85%] px-1 text-xs bg-black text-white rounded">
                    10:12  
                </p>
            </div>
            <div className="flex mt-3 px-4">
                <img 
                src={Logo}
                alt="" 
                className="h-9 w-9 rounded-full"
                />
                <div className="ml-2">
                    <h2 className="font-medium text-white mt-0 text-sm mb-0 items-center">
                        React Youtube Clone ashcvbajscnjkhasbc ckjabshcbajscas ajksbchasbjca
                    </h2>
                    <h3 className="text-[#808080] text-xs mt-1 flex items-center">
                        Ebin Yesudas
                        <span className="p-1">
                            <MdVerified />
                        </span>
                    </h3>
                    <p className="text-[#808080] m-0 font-medium text-xs">
                        20k views . 2 Months ago
                    </p>
                </div>
            </div>
                    </div>
                    <div className="flex flex-row w-[calc(100%-240px)] h-40 py-4 px-2 cursor-pointer hover:bg-[#272727]">
            <div className="relative w-56">
                <img 
                src={Thumbnail} 
                alt=""
                className="w-full h-full overflow-hidden rounded-2xl" 
                />
                <p className="absolute right-2 top-[85%] px-1 text-xs bg-black text-white rounded">
                    10:12  
                </p>
            </div>
            <div className="flex mt-3 px-4">
                <img 
                src={Logo}
                alt="" 
                className="h-9 w-9 rounded-full"
                />
                <div className="ml-2">
                    <h2 className="font-medium text-white mt-0 text-sm mb-0 items-center">
                        React Youtube Clone ashcvbajscnjkhasbc ckjabshcbajscas ajksbchasbjca
                    </h2>
                    <h3 className="text-[#808080] text-xs mt-1 flex items-center">
                        Ebin Yesudas
                        <span className="p-1">
                            <MdVerified />
                        </span>
                    </h3>
                    <p className="text-[#808080] m-0 font-medium text-xs">
                        20k views . 2 Months ago
                    </p>
                </div>
            </div>
                    </div>
                    <div className="flex flex-row w-[calc(100%-240px)] h-40 py-4 px-2 cursor-pointer hover:bg-[#272727]">
            <div className="relative w-56">
                <img 
                src={Thumbnail} 
                alt=""
                className="w-full h-full overflow-hidden rounded-2xl" 
                />
                <p className="absolute right-2 top-[85%] px-1 text-xs bg-black text-white rounded">
                    10:12  
                </p>
            </div>
            <div className="flex mt-3 px-4">
                <img 
                src={Logo}
                alt="" 
                className="h-9 w-9 rounded-full"
                />
                <div className="ml-2">
                    <h2 className="font-medium text-white mt-0 text-sm mb-0 items-center">
                        React Youtube Clone ashcvbajscnjkhasbc ckjabshcbajscas ajksbchasbjca
                    </h2>
                    <h3 className="text-[#808080] text-xs mt-1 flex items-center">
                        Ebin Yesudas
                        <span className="p-1">
                            <MdVerified />
                        </span>
                    </h3>
                    <p className="text-[#808080] m-0 font-medium text-xs">
                        20k views . 2 Months ago
                    </p>
                </div>
            </div>
                    </div>
                    <div className="flex flex-row w-[calc(100%-240px)] h-40 py-4 px-2 cursor-pointer hover:bg-[#272727]">
            <div className="relative w-56">
                <img 
                src={Thumbnail} 
                alt=""
                className="w-full h-full overflow-hidden rounded-2xl" 
                />
                <p className="absolute right-2 top-[85%] px-1 text-xs bg-black text-white rounded">
                    10:12  
                </p>
            </div>
            <div className="flex mt-3 px-4">
                <img 
                src={Logo}
                alt="" 
                className="h-9 w-9 rounded-full"
                />
                <div className="ml-2">
                    <h2 className="font-medium text-white mt-0 text-sm mb-0 items-center">
                        React Youtube Clone ashcvbajscnjkhasbc ckjabshcbajscas ajksbchasbjca
                    </h2>
                    <h3 className="text-[#808080] text-xs mt-1 flex items-center">
                        Ebin Yesudas
                        <span className="p-1">
                            <MdVerified />
                        </span>
                    </h3>
                    <p className="text-[#808080] m-0 font-medium text-xs">
                        20k views . 2 Months ago
                    </p>
                </div>
            </div>
                    </div>
                    <div className="flex flex-row w-[calc(100%-240px)] h-40 py-4 px-2 cursor-pointer hover:bg-[#272727]">
            <div className="relative w-56">
                <img 
                src={Thumbnail} 
                alt=""
                className="w-full h-full overflow-hidden rounded-2xl" 
                />
                <p className="absolute right-2 top-[85%] px-1 text-xs bg-black text-white rounded">
                    10:12  
                </p>
            </div>
            <div className="flex mt-3 px-4">
                <img 
                src={Logo}
                alt="" 
                className="h-9 w-9 rounded-full"
                />
                <div className="ml-2">
                    <h2 className="font-medium text-white mt-0 text-sm mb-0 items-center">
                        React Youtube Clone ashcvbajscnjkhasbc ckjabshcbajscas ajksbchasbjca
                    </h2>
                    <h3 className="text-[#808080] text-xs mt-1 flex items-center">
                        Ebin Yesudas
                        <span className="p-1">
                            <MdVerified />
                        </span>
                    </h3>
                    <p className="text-[#808080] m-0 font-medium text-xs">
                        20k views . 2 Months ago
                    </p>
                </div>
            </div>
                    </div>
                    <div className="flex flex-row w-[calc(100%-240px)] h-40 py-4 px-2 cursor-pointer hover:bg-[#272727]">
            <div className="relative w-56">
                <img 
                src={Thumbnail} 
                alt=""
                className="w-full h-full overflow-hidden rounded-2xl" 
                />
                <p className="absolute right-2 top-[85%] px-1 text-xs bg-black text-white rounded">
                    10:12  
                </p>
            </div>
            <div className="flex mt-3 px-4">
                <img 
                src={Logo}
                alt="" 
                className="h-9 w-9 rounded-full"
                />
                <div className="ml-2">
                    <h2 className="font-medium text-white mt-0 text-sm mb-0 items-center">
                        React Youtube Clone ashcvbajscnjkhasbc ckjabshcbajscas ajksbchasbjca
                    </h2>
                    <h3 className="text-[#808080] text-xs mt-1 flex items-center">
                        Ebin Yesudas
                        <span className="p-1">
                            <MdVerified />
                        </span>
                    </h3>
                    <p className="text-[#808080] m-0 font-medium text-xs">
                        20k views . 2 Months ago
                    </p>
                </div>
            </div>
                    </div>
                    <div className="flex flex-row w-[calc(100%-240px)] h-40 py-4 px-2 cursor-pointer hover:bg-[#272727]">
            <div className="relative w-56">
                <img 
                src={Thumbnail} 
                alt=""
                className="w-full h-full overflow-hidden rounded-2xl" 
                />
                <p className="absolute right-2 top-[85%] px-1 text-xs bg-black text-white rounded">
                    10:12  
                </p>
            </div>
            <div className="flex mt-3 px-4">
                <img 
                src={Logo}
                alt="" 
                className="h-9 w-9 rounded-full"
                />
                <div className="ml-2">
                    <h2 className="font-medium text-white mt-0 text-sm mb-0 items-center">
                        React Youtube Clone ashcvbajscnjkhasbc ckjabshcbajscas ajksbchasbjca
                    </h2>
                    <h3 className="text-[#808080] text-xs mt-1 flex items-center">
                        Ebin Yesudas
                        <span className="p-1">
                            <MdVerified />
                        </span>
                    </h3>
                    <p className="text-[#808080] m-0 font-medium text-xs">
                        20k views . 2 Months ago
                    </p>
                </div>
            </div>
                    </div>                                                                                                                                                                                                                            

        

        </div>
  )
}

export default SearchResults
