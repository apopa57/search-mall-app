import React, { PropTypes } from 'react'
import BaseComponent from 'utils/baseComponent'
import { connect } from 'react-redux'
import { togglePopup } from 'actions/popup'
import { updateSeachParams, searchItemsIfNeed, resetSearch } from 'actions/search'
import { createSelector } from 'reselect'
import { selectSearchParams } from 'selectors/search'
import { push } from 'react-router-redux'
import InputField from 'components/common/inputField'
import bindAll from 'lodash/bindAll'

class SearchBar extends BaseComponent {
  constructor(props) {
    super(props)
    bindAll(this, '_handleSubmit', '_handleChange')
  }

  _handleChange(event) {
    this.props.updateSeachParams('keyword', event.target.value)
  }

  _handleSubmit(event) {
    event.preventDefault()
    const { searchItemsIfNeed, searchParams,  push, resetSearch } = this.props
    // Alway reset page to 1 when submit form
    push(`search?q=${searchParams.keyword}`)
    resetSearch()
    searchItemsIfNeed(searchParams)
  }

  render() {
    const { searchParams, togglePopup } = this.props

    return (
      <form onSubmit={this._handleSubmit} className="search-form">
        <div className="columns twelve">
          <InputField
            className="u-full-width"
            onChange={this._handleChange}
            placeholder="Search"
            type="search"
            value={searchParams.keyword} />
          <button onClick={this._handleSubmit}>
            <i className="search-icon" />
          </button>
          <button onClick={togglePopup}>
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
), { updateSeachParams, searchItemsIfNeed, resetSearch, togglePopup, push })(SearchBar)
