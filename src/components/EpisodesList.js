import React, { useEffect, useState } from "react";
import axios from "axios";


import EpisodeCard from "./EpisodeCard";

export default function EpisodesList() {
  // TODO: Add useState to track data from useEffect
  const [episodeInfo, setEpisodeInfo] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode/')
    .then(res => {
      console.log(res.data.results);
      setEpisodeInfo(res.data.results);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <section className="character-list grid-view">
         {episodeInfo.map(episode => {
          return <EpisodeCard key={episode.id} 
          name={episode.name} 
          date={episode.air_date} 
          episode={episode.episode} 
          characters={episode.characters} 
        />
        })}
    </section>
  );
}
