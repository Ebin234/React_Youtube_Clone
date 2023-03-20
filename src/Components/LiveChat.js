import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Logo from "../Assets/userLogo.png";
import { generateMessage, generateNames } from '../Utils/Constants';
import { addMessage } from '../Utils/LiveChatSlice';

function LiveChat() {
    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();
    const messages = useSelector((store) => store.liveChat.messages);

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(addMessage({
                name: generateNames(),
                message: generateMessage(10)
            }))
        }, 1500)
        return (() => {
            clearInterval(interval)
        })
    })
    return (
        <>
            <div className='w-full h-[469px] text-white ml-2 p-2 border border-black bg-[#272727] rounded-lg overflow-y-scroll scrollbar-hide flex flex-col-reverse '>
                {messages?.map((data, i) => {
                    return (
                        <div key={i} className="flex  items-center shadow-sm p-2">
                            <img src={Logo} alt="user logo" className='h-8' />
                            <span className='font-bold px-2'>{data?.name}</span>
                            <span>{data?.message}</span>
                        </div>
                    )
                })}
            </div>
            <form className='w-full ml-2 '
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(addMessage({
                        name: "Ebin Yesudas",
                        message: liveMessage
                    }))
                    setLiveMessage("");
                }}
            >
                <input
                    className='px-2 w-96 outline-none border border-black h-8'
                    type="text"
                    value={liveMessage}
                    onChange={(e) => {
                        setLiveMessage(e?.target?.value);
                    }}
                />
                <button className='bg-white my-2 py-1 px-4 border border-black rounded-lg hover:bg-slate-300'>send</button>
            </form>
        </>
    )
}

export default LiveChat;
