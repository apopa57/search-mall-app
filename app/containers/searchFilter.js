import React, { PropTypes } from 'react'
import BaseComponent from 'utils/baseComponent'
import { connect } from 'react-redux'
import { onSearchParamsChange } from 'actions/search'
import { createSelector } from 'reselect'
import { selectGenres } from 'selectors/genres'
import { selectSearchParams } from 'selectors/search'
import SelectBox from 'components/common/selectBox'

class SearchFilter extends BaseComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="filter-box">
        <div className="filter-box__content">
          <span className="filter-box__label">Genres</span>
          <SelectBox {...this.props}/>
        </div>
        <div className="filter-box__content">
          <span className="filter-box__label">Price range</span>
        </div>
      </div>
    )
  }
}

export default connect(createSelector(
  selectGenres(),
  selectSearchParams(),
  (genres, searchParams) => ({ genres, searchParams })
), { onSearchParamsChange })(SearchFilter)
