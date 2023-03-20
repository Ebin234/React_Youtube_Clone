import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import SearchSlice from "./SearchSlice";
import LiveChatSlice from "./LiveChatSlice";

const store = configureStore({
    reducer: {
        app: AppSlice,
        search: SearchSlice,
        liveChat: LiveChatSlice,
    }
})

export default store;