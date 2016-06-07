import React from 'react';
import BaseComponent from 'utils/baseComponent';
import SearchBar from 'containers/searchBar'
import Popup from 'containers/popup'

export default class Header extends BaseComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="columns two">
              <h1>Rakuten Search App</h1>
            </div>
            <div className="columns ten relative">
              <SearchBar />
              <Popup>
                <div>Content</div>
              </Popup>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
