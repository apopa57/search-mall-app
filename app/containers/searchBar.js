import React from 'react'
import BaseComponent from 'utils/baseComponent'
import { connect } from 'react-redux'
import * as popupActions from 'actions/popup'
import * as searchActions from 'actions/search'
import * as genreActions from 'actions/genre'
import * as rankingActions from 'actions/ranking'
import { API_KEY } from 'constants/base'

class SearchBar extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.togglePopup = this.togglePopup.bind(this)
  }

  componentWillMount() {
    const { searchItemsIfNeed, fetchGenresIfNeeded, fetchRankingIfNeeded } = this.props
    const params = {
      keyword: 'iphone',
      format: 'json',
      applicationId: API_KEY
    }

    searchItemsIfNeed(params)
    fetchGenresIfNeeded()
    fetchRankingIfNeeded()
  }

  handleChange(event) {
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  togglePopup() {
    this.props.togglePopup()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="columns twelve">
          <input
            className="u-full-width"
            onChange={this.handleChange}
            placeholder="Search"
            type="search"
            value={this.state.query} />
          <button
            onClick={this.handleSubmit}>
            <i className="search-icon" />
          </button>
          <button
            onClick={this.togglePopup}>
            <i className="settings-icon" />
          </button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  const { entities } = state;

  return {
    genres: entities.genres
  }
}

export default connect(mapStateToProps, {...searchActions, ...genreActions, ...popupActions, ...rankingActions})(SearchBar)
