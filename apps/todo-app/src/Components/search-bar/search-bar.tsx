import React, { Component } from 'react';

import './search-bar.scss';

/* eslint-disable-next-line */
export interface SearchBarProps {}

export class SearchBar extends Component<SearchBarProps> {
  render() {
    return (
      <div className="ml-form mt-0">
        <input type="text" placeholder="Search" aria-label="Search" />
      </div>
    );
  }
}

export default SearchBar;
