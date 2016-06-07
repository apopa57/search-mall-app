import React, { PropTypes } from 'react'
import BaseComponent from 'utils/baseComponent'
import Select from 'react-select'

export default class SelectBox extends BaseComponent {
  constructor(props) {
    super(props)

    this._onSelectChange = this._onSelectChange.bind(this)
  }

  _onSelectChange(e) {
    const { onSearchParamsChange, searchParams, genres} = this.props
    searchParams.genreId = e.value
    onSearchParamsChange(searchParams)
  }

  render() {
    const { searchParams, genres } = this.props

    return(
      <Select
         name="form-field-name"
         value={searchParams.genreId}
         options={genres}
         onChange={this._onSelectChange}
         clearable={false}
      />
    )
  }
}
