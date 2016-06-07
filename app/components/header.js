import React from 'react';
import BaseComponent from 'utils/baseComponent';

export default class Header extends BaseComponent {
  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="columns twelve">
              <h1>Rakuten Search App</h1>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
