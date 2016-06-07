import React from 'react';
import BaseComponent from 'utils/baseComponent';
import SearchBar from 'containers/searchBar'

export default class Header extends BaseComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="columns twelve">
              <h1>Rakuten Search App</h1>
            </div>
            <div className="columns twelve">
              <SearchBar />
            </div>
          </div>
        </div>
      </header>
    );
  }
}
