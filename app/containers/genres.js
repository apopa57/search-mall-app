import React from 'react'
import BaseComponent from 'utils/baseComponent'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import * as genreActions from 'actions/genre'
import { selectGenres } from 'selectors/genres'
import GenreList from 'components/search/genreList'

class Genres extends BaseComponent {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { fetchGenresIfNeeded } = this.props
    fetchGenresIfNeeded()
  }

  render() {
    const { genres } = this.props
    return <GenreList data={genres} />
  }
}

export default connect(createSelector(
  selectGenres(),
  (genres) => ({ genres })
), { ...genreActions })(Genres)
