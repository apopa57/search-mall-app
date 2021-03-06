import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { doNewSearch, updateSeachParams, resetSearch } from 'actions/search'
import { createSelector } from 'reselect'
import { selectGenres } from 'selectors/genres'
import { selectSearchParams } from 'selectors/search'
import { OTHER_OPTIONS } from 'constants/base'
import BaseComponent from 'utils/baseComponent'
import SelectBox from 'components/common/selectBox'
import InputField from 'components/common/inputField'
import Checkbox from 'components/common/checkbox'
import bindAll from 'lodash/bindAll'

class SearchFilter extends BaseComponent {
  constructor(props) {
    super(props)
    bindAll(this,
      '_onSelectGenresChange',
      '_onInputChange',
      '_applyAdvancedsearch'
    )
  }

  _onSelectGenresChange(e) {
    this.props.updateSeachParams('genreId', e.value)
  }

  _onInputChange(e) {
    const target = e.target
    const value = target.type === 'text' ? target.value : ~~target.checked
    this.props.updateSeachParams(e.target.id, value)
  }

  _applyAdvancedsearch() {
    const { doNewSearch } = this.props
    doNewSearch()
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
          <button className="filter-box__btn" onClick={this._applyAdvancedsearch}>
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
), { updateSeachParams, doNewSearch, resetSearch })(SearchFilter)
