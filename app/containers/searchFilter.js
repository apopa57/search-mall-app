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
      <div className="columns two search-page__filter">
        <div className="search-page__filter__title">
          <h4>検索条件</h4>
          <div className="search-page__filter__content">

          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { onSearchParamsChange })(SearchFilter)
