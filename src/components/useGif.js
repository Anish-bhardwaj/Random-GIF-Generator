import axios from 'axios';
import React, { useEffect, useState } from 'react'
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
// const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


const useGif = (tag) => {
    const [gif,setGif]=useState(''); 
    const [loading, setLoading] = useState(true);
    
    async function getData(tag){
        setLoading(true);
        try{
        const {data}=await axios.get(tag?`${url}&tag=${tag}`:url);
        const imgSrc=data.data.images.downsized_large.url;
        setGif(imgSrc);
        setLoading(false);}
        catch(exc){
            setLoading(true);
        }
    }
    useEffect(()=>{
        getData('car');
    },[])
    return {gif,loading,getData}
}
  
export default useGif
