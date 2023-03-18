import {createSlice} from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
        searchQuery:"New",
        videoId:""
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        changeSearchQuery:(state,action)=>{
            state.searchQuery = action.payload;
        },
        changeVideoId:(state,action)=>{
            state.videoId = action.payload;
        }
    }
});

export const {toggleMenu,changeSearchQuery,changeVideoId} = appSlice.actions;
export default appSlice.reducer;