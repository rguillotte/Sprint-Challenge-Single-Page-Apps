import React from "react";
import { Switch, Route} from "react-router-dom";
import CharacterList from "./CharacterList";
import LocationsList from "./LocationsList";
import EpisodesList from "./EpisodesList";
import WelcomePage from "./WelcomePage";

export default function AppRouter() {
    return <div>
            <Switch>
                <Route path="/characters" component={CharacterList} />
                <Route path="/locations" component={LocationsList} />
                <Route path="/episodes" component={EpisodesList} />
                <Route exact path="/" component={WelcomePage} />
            </Switch>
           </div>
}
