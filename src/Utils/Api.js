import axios from 'axios';
import { YOUTUBE_API_BASEURL } from './Constants';

 const searchApiOptions = {
    params: { hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

  const videoDetailsApiOptions = {
    method: 'GET',
    // url: 'https://youtube138.p.rapidapi.com/v2/video/details/',
    params: {hl: 'en'},
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

export const searchData =async (setData,query)=>{
  console.log("query",query)
      const {data} = await axios.get(YOUTUBE_API_BASEURL+"v1/search/?q="+query,searchApiOptions)
      setData(data);
      // console.log("data",data.contents)
}

export const searchSuggestionApi = async (setSearchSuggestions,searchQuery)=>{
  const {data} = await axios.get(YOUTUBE_API_BASEURL+"v1/auto-complete/?q="+searchQuery,searchApiOptions)
  setSearchSuggestions(data.results)
  // console.log("suggestions:",data.results)
  
}

export const videoDetailsApi =async (setVideoData,videoId)=>{
  const {data} = await axios.get(YOUTUBE_API_BASEURL+"v2/video/details/?id="+videoId,videoDetailsApiOptions)
  setVideoData(data)
}

export const suggestedVideoApi = async (setSuggestedVideo,videoId)=>{
  const {data} = await axios.get(YOUTUBE_API_BASEURL+"v1/video/related-contents/?id="+videoId,searchApiOptions)
  setSuggestedVideo(data.contents);
  console.log("suggestedvideodata",data)
}