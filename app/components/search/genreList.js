import React from 'react'
import BaseComponent from 'utils/baseComponent'

export default class GenreList extends BaseComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { genres } = this.props.data

    return (
      <select className="u-full-width">
        <option>Category</option>
        {Object.keys(genres).map(key => {
          const genre = genres[key]
          return (
            <option value={genre.genreId}>{genre.genreName}</option>
          )
        })}
      </select>
    );
  }
}
