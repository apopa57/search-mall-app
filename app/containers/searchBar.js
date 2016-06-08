import React, { PropTypes } from 'react'
import BaseComponent from 'utils/baseComponent'
import { connect } from 'react-redux'
import { onSearchParamsChange, searchItemsIfNeed } from 'actions/search'
import { createSelector } from 'reselect'
import { selectGenres } from 'selectors/genres'
import { selectSearchParams } from 'selectors/search'
import SelectBox from 'components/common/selectBox'
import InputField from 'components/common/InputField'
import Checkbox from 'components/common/checkbox'
import bindAll from 'lodash/bindAll'

class SearchBar extends BaseComponent {
  constructor(props) {
    super(props)
    bindAll(this,
      '_onInputChange',
      '_onSubmitForm',
      '_onTogglePopup'
    )
  }

  updateParams(value, type) {
    const { onSearchParamsChange, searchParams } = this.props
    searchParams[type] = value
    onSearchParamsChange(searchParams)
  }

  _onInputChange(e) {
    this.updateParams(e.target.value, 'keyword')
  }

  _onSubmitForm(e) {
    e.preventDefault()
  }

  _onTogglePopup() {

  }

  render() {
    const { searchParams } = this.props

    return (
      <form onSubmit={this._onSubmitForm} className="search-form">
        <div className="columns twelve">
          <InputField
            className="u-full-width"
            onChange={this._onInputChange}
            placeholder="Search"
            type="text"
            value={searchParams.keyword} />
          <button
            onClick={this._onSubmitForm}>
            <i className="search-icon" />
          </button>
          <button
            onClick={this._onTogglePopup}>
            <i className="settings-icon" />
          </button>
        </div>
      </form>
    )
  }
}

export default connect(createSelector(
  selectSearchParams(),
  (searchParams) => ({ searchParams })
), { onSearchParamsChange, searchItemsIfNeed })(SearchBar)
