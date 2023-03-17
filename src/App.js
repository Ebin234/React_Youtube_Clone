import React from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import WatchPage from "./Pages/WatchPage";
import {Provider} from "react-redux";
import store from "./Utils/Store";

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
            <Provider store={store}>
        <Header />
        <RouterProvider router={AppLayout}>
        <Home />
        <WatchPage />
        </RouterProvider>
        </Provider>
        </div>
        </>
    )
}

export default App;