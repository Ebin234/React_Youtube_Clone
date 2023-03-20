import axios from 'axios';
import { SEARCH_SUGGESTIONS_API_BASEURL, YOUTUBE_API_BASEURL } from './Constants';

const searchOptions = {
  params: { geo: 'US', lang: 'en' },
  headers: {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
  }
};

const videoDetailsOptions = {
  headers: {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
  }
};

const searchSuggestionOptions = {
  params: { hl: 'en', gl: 'US' },
  headers: {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const searchData = async (setData, query) => {
  const { data } = await axios.get(YOUTUBE_API_BASEURL + "search?query=" + query, searchOptions);
  setData(data.data);
}

export const searchSuggestionApi = async (setSearchSuggestions, searchQuery) => {
  const { data } = await axios(SEARCH_SUGGESTIONS_API_BASEURL + "v1/auto-complete/?q=" + searchQuery, searchSuggestionOptions);
  setSearchSuggestions(data.results);
}

export const videoDetailsApi = async (setVideoData, videoId) => {
  const { data } = await axios.get(YOUTUBE_API_BASEURL + "video?id=" + videoId, videoDetailsOptions);
  setVideoData(data);
}

export const suggestedVideoApi = async (setSuggestedVideo, videoId) => {
  const { data } = await axios.get(YOUTUBE_API_BASEURL + "related?id=" + videoId, searchOptions);
  setSuggestedVideo(data.data);
}