import React, { PropTypes } from 'react'
import BaseComponent from 'utils/baseComponent'
import { connect } from 'react-redux'
import { onSearchParamsChange } from 'actions/search'

class SearchFilter extends BaseComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="columns three search-page__filter">
        <div className="search-page__filter__title">
          <span>Search filter</span>
          <div className="search-page__filter__content">
            This is filter area
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { onSearchParamsChange })(SearchFilter)
