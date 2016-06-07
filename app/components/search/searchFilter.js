import React, { PropTypes } from 'react'
import FilterBox from 'containers/searchFilter'

export default () => {
  return (
    <div className="columns two search-page__filter">
      <div className="search-page__filter__title">
        <span>Advanced Search</span>
      </div>
      <div className="search-page__filter__content">
        <FilterBox  />
      </div>
    </div>
  )
}
