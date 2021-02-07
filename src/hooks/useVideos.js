import { useState, useEffect } from "react";
import youtube from "../api/youtube";

const KEY = "AIzaSyB_uoENeh2SGqrg4H1Ola5M02uFs1q_iPE";


const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
