import React from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import WatchPage from "./Pages/WatchPage";

const AppLayout = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path:"watch",
        element: <WatchPage />
    }
]);

const App = ()=>{
    return(
        <>
        <div className="flex  ">
        <Header />
        <RouterProvider router={AppLayout}>
        <Home />
        <WatchPage />
        </RouterProvider>
        </div>
        </>
    )
}

export default App;