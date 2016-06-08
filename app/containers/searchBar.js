import React, { PropTypes } from 'react'
import BaseComponent from 'utils/baseComponent'
import { connect } from 'react-redux'
import { togglePopup } from 'actions/popup'
import { onSearchParamsChange, searchItemsIfNeed } from 'actions/search'
import { createSelector } from 'reselect'
import { selectGenres } from 'selectors/genres'
import { selectSearchParams } from 'selectors/search'
import InputField from 'components/common/inputField'
import bindAll from 'lodash/bindAll'

class SearchBar extends BaseComponent {
  constructor(props) {
    super(props)
    bindAll(this, 'handleSubmit', 'handleChange')
  }

  handleChange(event) {
    const { onSearchParamsChange, searchParams } = this.props
    searchParams.keyword = event.target.value
    onSearchParamsChange(searchParams)
  }

  handleSubmit(event) {
    event.preventDefault()

    const { searchItemsIfNeed, searchParams } = this.props
    searchItemsIfNeed(searchParams)
  }

  render() {
    const { searchParams, togglePopup } = this.props

    return (
      <form onSubmit={this.handleSubmit} className="search-form">
        <div className="columns twelve">
          <InputField
            className="u-full-width"
            onChange={this.handleChange}
            placeholder="Search"
            type="search"
            value={searchParams.keyword} />
          <button onClick={this.handleSubmit}>
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
), { onSearchParamsChange, searchItemsIfNeed, togglePopup })(SearchBar)
