import React, { PropTypes } from 'react'
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
    console.log(this.props.data);
    return <div>This is search result</div>
  }
}

export default connect(createSelector(
  selectSearchData(),
  selectSearchLoading(),
  (data, loading) => ({ data, loading})
))(SearchResult)