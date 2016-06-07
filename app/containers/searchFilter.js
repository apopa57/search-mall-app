import React, { PropTypes } from 'react'
import BaseComponent from 'utils/baseComponent'
import { connect } from 'react-redux'
import { onSearchParamsChange } from 'actions/search'
import { createSelector } from 'reselect';
import { selectGenres } from 'selectors/genres'
import FilterBox from 'components/common/searchFilter'

class SearchFilter extends BaseComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="columns two search-page__filter">
        <div className="search-page__filter__title">
          <span>Advanced Search</span>
          <div className="search-page__filter__content">
            <FilterBox />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(createSelector(
  selectGenres(),
  (genres) => ({ genres })
), { onSearchParamsChange })(SearchFilter)
