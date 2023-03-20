import React from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./Pages/WatchPage";
import { Provider } from "react-redux";
import store from "./Utils/Store";
import LivePage from "./Pages/LivePage";
import Error from "./Components/Error";

const AppLayout = createBrowserRouter([
    {
        path: "/",
        element: [<Header key={1} />, <Home key={2} />],
        errorElement: <Error />
    },
    {
        path: "/watch",
        element: [<Header key={1} />, <WatchPage key={2} />]
    },
    {
        path: "/live",
        element: [<Header key={1} />, <LivePage key={2} />]
    }
]);

const App = () => {
    return (
        <>
            <div className="flex  ">
                <Provider store={store}>
                    <RouterProvider router={AppLayout}>
                        <Header />
                        <Home />
                        <WatchPage />
                    </RouterProvider>
                </Provider>
            </div>
        </>
    )
}

export default App;