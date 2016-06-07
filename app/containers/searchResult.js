import React from 'react'
import BaseComponent from 'utils/baseComponent'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import {
  selectSearchData,
  selectSearchLoading
} from 'selectors/search'

class SearchResult extends BaseComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="columns nine search-page__results">
        <div className="columns twelve search-page__results__menubar">
          <div className="search-page__results__title">
            <span>Search results</span>
          </div>
          <div className=" search-page__results__gridicon">
            <span className="box-icon active"></span>
            <span className="list-icon"></span>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(createSelector(
  selectSearchData(),
  selectSearchLoading(),
  (data, loading) => ({ data, loading})
))(SearchResult)
