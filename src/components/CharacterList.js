import React, { useEffect, useState } from "react";
import axios from "axios";
import {Card} from "semantic-ui-react";

import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterInfo, setCharacterInfo] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      console.log(res.data.results);
      setCharacterInfo(res.data.results);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <section className="character-list grid-view">
        {characterInfo.map(char => {
          return <CharacterCard key={char.id} 
          name={char.name} 
          img={char.image} 
          species={char.species} 
          status={char.status} 
          location={char.location.name} 
          origin={char.origin.name}
          episodes={char.episode} />
        })}
    </section>
  );
}
