import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
export default function TabNav({}) {

    return (
        <Menu tabular>
          <Menu.Item name='home'><NavLink to="/">Home</NavLink></Menu.Item>
          <Menu.Item name='characters'><NavLink to="/characters">Characters</NavLink></Menu.Item>
          <Menu.Item name='locations'><NavLink to="/locations">Locations</NavLink></Menu.Item>
          <Menu.Item name='episodes'><NavLink to="/episodes">Episodes</NavLink></Menu.Item>
        </Menu>
      )

};
