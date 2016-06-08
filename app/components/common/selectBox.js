import React, { PropTypes } from 'react'
import BaseComponent from 'utils/baseComponent'
import Select from 'react-select'

const SelectBox = (props) => {
  const { genreId, genres, onChange } = props

  return(
    <Select
       name="form-field-name"
       value={genreId}
       options={genres}
       onChange={onChange}
       clearable={false}
    />
  )
}

SelectBox.propTypes = {
  genreId: PropTypes.number,
  genres: PropTypes.array,
  onSelectChange: PropTypes.func
}

export default SelectBox
