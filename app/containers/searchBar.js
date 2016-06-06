import React, { PropTypes } from 'react'
import BaseComponent from 'utils/baseComponent'
import { connect } from 'react-redux'
import * as searchActions from 'actions/search'
import * as genreActions from 'actions/genre'
import * as rankingActions from 'actions/ranking'
import { API_KEY } from 'constants/base'

class SearchBar extends BaseComponent {
  constructor(props) {
    super(props);
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

  render() {
    return <div>This is searchbar</div>
  }
}

const mapStateToProps = (state) => {
  const { entities } = state;
  
  return {
    genres: entities.genres
  }
}

export default connect(mapStateToProps, {...searchActions, ...genreActions, ...rankingActions})(SearchBar)