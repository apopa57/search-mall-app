import React from 'react'
import BaseComponent from 'utils/baseComponent'
import Header from 'components/header'
import ItemGrid from 'components/ItemGrid'
import SearchForm from 'components/searchForm'

export default class App extends BaseComponent {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <SearchForm />
          <ItemGrid />
        </div>
      </div>
    )
  }
}
