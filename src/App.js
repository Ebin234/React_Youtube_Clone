import React from "react";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";

const App = ()=>{
    return(
        <>
        <div className="flex flex-col h-full">
        <Header />
        <SideBar />
        </div>
        </>
    )
}

export default App;