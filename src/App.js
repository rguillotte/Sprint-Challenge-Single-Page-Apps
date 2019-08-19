import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import AppRouter from "./components/AppRouter.js";

import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
import EpisodesList from "./components/EpisodesList";

export default function App() {
  return (
    <main>
      <CharacterList />
      <LocationsList />
      <EpisodesList />
      {/* <Header />
      <TabNav />
      <AppRouter /> */}
    </main>
  );
}
