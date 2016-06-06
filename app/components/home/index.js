import React from 'react'
import SearchBar from 'containers/searchBar'

export default () => {
  return(
    <div className="row home">
      <SearchBar />
      <div className="home__content">
        This is home page
      </div>
    </div>
  )
}
