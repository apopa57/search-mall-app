import React from 'react'
import SearchResult from 'containers/searchResult'
import SearchFilter from './searchFilter'

export default () => {
  return(
    <div className="row search-page">
      <SearchFilter />
      <SearchResult />
    </div>
  )
}
