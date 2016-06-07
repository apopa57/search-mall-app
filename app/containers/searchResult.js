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
      <div className="columns ten search-page__results">
        This is search result
      </div>
    )
  }
}

export default connect(createSelector(
  selectSearchData(),
  selectSearchLoading(),
  (data, loading) => ({ data, loading})
))(SearchResult)
