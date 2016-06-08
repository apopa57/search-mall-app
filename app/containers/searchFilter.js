import React, { PropTypes } from 'react'
import BaseComponent from 'utils/baseComponent'
import { connect } from 'react-redux'
import { onSearchParamsChange } from 'actions/search'
import { createSelector } from 'reselect'
import { selectGenres } from 'selectors/genres'
import { selectSearchParams } from 'selectors/search'
import SelectBox from 'components/common/selectBox'
import InputField from 'components/common/InputField'
import bindAll from 'lodash/bindAll'

class SearchFilter extends BaseComponent {
  constructor(props) {
    super(props)
    bindAll(this, 'updateParams', '_onSelectGenresChange', '_onMinPriceChange')
  }

  updateParams(value, type) {
    const { onSearchParamsChange, searchParams, genres} = this.props
    searchParams[type] = value
    onSearchParamsChange(searchParams)
  }

  _onSelectGenresChange(e) {
    this.updateParams(e.value, 'genreId')
  }

  _onMinPriceChange(e) {
    this.updateParams(e.target.value, 'minPrice')
  }

  render() {
    const { searchParams, genres} = this.props

    return (
      <div className="filter-box">
        <div className="filter-box__content">
          <span className="filter-box__label">Genres</span>
          <SelectBox
            onChange={this._onSelectGenresChange}
            genreId={searchParams.genreId}
            genres={genres}
          />
        </div>
        <div className="filter-box__content">
          <span className="filter-box__label">Price range</span>
          <div className="filter-box__inputfield">
            <InputField
              className="columns five"
              value={searchParams.minPrice}
              placeholder={'Min price'}
              onChange={this._onMinPriceChange}/>
            <div className="columns two connect-icon">~</div>
            <InputField
              className="columns five"
              value={searchParams.minPrice}
              placeholder={'Max price'}
              onChange={this._onMinPriceChange}/>
          </div>
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
