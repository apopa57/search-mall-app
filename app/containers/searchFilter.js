import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { onSearchParamsChange, searchItemsIfNeed, checkValidation } from 'actions/search'
import { createSelector } from 'reselect'
import { selectGenres } from 'selectors/genres'
import { selectSearchParams } from 'selectors/search'
import { OTHER_OPTIONS } from 'constants/base'
import BaseComponent from 'utils/baseComponent'
import SelectBox from 'components/common/selectBox'
import InputField from 'components/common/inputField'
import Checkbox from 'components/common/checkbox'
import bindAll from 'lodash/bindAll'
import isEmpty from 'lodash/isEmpty'

class SearchFilter extends BaseComponent {
  constructor(props) {
    super(props)
    bindAll(this,
      '_onSelectGenresChange',
      '_onInputChange',
      '_updateChange'
    )
  }

  _updateParams(value, type) {
    const { onSearchParamsChange, searchParams } = this.props
    searchParams[type] = value
    onSearchParamsChange(searchParams)
  }

  _onSelectGenresChange(e) {
    this._updateParams(e.value, 'genreId')
  }

  _onInputChange(e) {
    const target = e.target
    const value = target.type === 'text' ? target.value : ~~target.checked
    this._updateParams(value, e.target.id)
  }

  _updateChange() {
    const { searchParams, searchItemsIfNeed, checkValidation } = this.props
    checkValidation(!isEmpty(searchParams.keyword))
    searchItemsIfNeed(searchParams)
  }

  render() {
    const { searchParams, genres, searchItemsIfNeed } = this.props

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
          <div className="filter-box__inputfield row">
            <InputField
              id="minPrice"
              className="columns five"
              value={searchParams.minPrice}
              placeholder='Min price'
              onChange={this._onInputChange}/>
            <div className="columns two connect-icon">~</div>
            <InputField
              id="maxPrice"
              className="columns five"
              value={searchParams.maxPrice}
              placeholder='Max price'
              onChange={this._onInputChange}/>
          </div>
        </div>
        <div className="filter-box__content">
          <span className="filter-box__label">Include sold out items</span>
          <Checkbox
            className="animated-checkbox"
            id="availability"
            value={searchParams.availability}
            onChange={this._onInputChange}
            name="Include sold out items"/>
        </div>
        <div className="filter-box__content">
          <span className="filter-box__label">Asaraku service</span>
          <Checkbox
            className="animated-checkbox"
            id="asurakuFlag"
            value={searchParams.asurakuFlag}
            onChange={this._onInputChange}
            name="Only asaraku items"/>
        </div>
        <div className="filter-box__content">
          <span className="filter-box__label">Free shipping</span>
          <Checkbox
            className="animated-checkbox"
            id="postageFlag"
            value={searchParams.postageFlag}
            onChange={this._onInputChange}
            name="Only free shipping items"/>
        </div>
        <div className="filter-box__content">
          <span className="filter-box__label">Other options</span>
          {
            OTHER_OPTIONS.map(option => {
              return (
                 <Checkbox
                   className="animated-checkbox"
                   key={option.id}
                   id={option.id}
                   value={searchParams[option.id]}
                   onChange={this._onInputChange}
                   name={option.name} />
              )
            })
          }
        </div>
        <div className="filter-box__content">
          <button className="filter-box__btn" onClick={this._updateChange}>
            Apply
          </button>
        </div>
      </div>
    )
  }
}

export default connect(createSelector(
  selectGenres(),
  selectSearchParams(),
  (genres, searchParams) => ({ genres, searchParams })
), { onSearchParamsChange, searchItemsIfNeed, checkValidation })(SearchFilter)
