import React, { useEffect, useState } from "react";
import axios from "axios";

import LocationCard from "./LocationCard";

export default function LocationsList() {
      // TODO: Add useState to track data from useEffect
  const [locationInfo, setLocationInfo] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/location/')
    .then(res => {
      console.log(res.data.results);
        setLocationInfo(res.data.results);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

    return (
        <section className="character-list grid-view">
            {locationInfo.map(location => {
                return <LocationCard
                        key={location.id}
                        name={location.name}
                        type={location.type}
                        dimension={location.dimension}
                        residents={location.residents}
                />
            })}

       </section>
  );
}

