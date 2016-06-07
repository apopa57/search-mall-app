import React from 'react'
import SearchBar from 'containers/searchBar'
import SearchResult from 'containers/searchResult'

export default () => {
  return(
    <div className="row home">
      <SearchBar />
      <SearchResult />
      <div className="home__content">
        This is home page
      </div>
    </div>
  )
}
