import React from 'react'
import BaseComponent from 'utils/baseComponent'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import Loader from 'components/common/loader'
import ItemGrid from 'components/search/itemGrid'

import {
  selectSearchData,
  selectSearchLoading
} from 'selectors/search'

class SearchResult extends BaseComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { data, loading }　= this.props
    return(
      <div className="columns ten search-page__results">
        <div className="columns twelve search-page__results__menubar">
          <div className="search-page__results__title">
            <span>Search results</span>
          </div>
          <div className=" search-page__results__gridicon">
            <span className="box-icon active"></span>
            <span className="list-icon"></span>
          </div>
        </div>
        <div className="columns twelve search-page__results__lists">
          <Loader hide={!loading} />
          <div className="block-grid">
            <ItemGrid data={data} hide={loading} />
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
