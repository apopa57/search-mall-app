import React from 'react'
import BaseComponent from 'utils/baseComponent'
import SearchBar from 'containers/searchBar'

export default class App extends BaseComponent {
  render() {
    return (
      <div className="app-body container">
        <SearchBar />
        {this.props.children}
      </div>
    )
  }
}
