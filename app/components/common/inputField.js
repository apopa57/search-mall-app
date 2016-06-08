import React , { PropTypes } from 'react'
import BaseComponent from 'utils/baseComponent'

const InputField = (props) => {
  const { value, placeholder, onChange, className, id } = props;

  return(
    <input
    type="text"
    id={id}
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
