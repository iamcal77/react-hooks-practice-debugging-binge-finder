import React from "react";
import Search from "./Search";
import Filter from "./Filter";
import { Menu } from "semantic-ui-react";

function Nav(props) { // Add 'props' as a parameter here
  return (
    <div>
      <Menu attached="top" inverted>
        <Menu.Item>
          <i className="material-icons md-48">tv</i>
        </Menu.Item>
        <Menu.Item>
          <h1>Tube Finder</h1>
        </Menu.Item>
        <Menu.Item position="right">
          <Filter handleFilter={props.handleFilter} /> {/* Use 'Filter' with uppercase F */}
        </Menu.Item>
        <Menu.Item position="right">
          <Search handleSearch={props.handleSearch} search={props.search} /> {/* Use 'Search' with uppercase S */}
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Nav;
