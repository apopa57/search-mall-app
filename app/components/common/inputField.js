import React , { PropTypes } from 'react'
import BaseComponent from 'utils/baseComponent'

const InputField = (props) => {
  const { value, placeholder, onChange, className } = props;

  return(
    <input
    type="text"
    className={className}
    placeholder={placeholder}
    value={value}
    onChange={onChange}/>
  )
}

InputField.propTypes = {
  value: PropTypes.string,
  onInputChange: PropTypes.func
}

export default InputField;
