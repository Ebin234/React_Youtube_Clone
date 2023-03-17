
import axios from 'axios';
import { YOUTUBE_API_BASEURL } from './Constants';

const options = {
    params: { hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

export const searchData =async (setData)=>{
      const {data} = await axios.get(YOUTUBE_API_BASEURL+"/search/?q=trending",options)
      setData(data);
      console.log("data",data.contents)
}