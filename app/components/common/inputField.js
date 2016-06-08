import React , { PropTypes } from 'react'

const InputField = (props) => {
  const { value, placeholder, onChange, className, type } = props;

  return(
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange} />
  )
}

InputField.defaultProps = {
  type: 'text'
}

InputField.propTypes = {
  value: PropTypes.string,
  onInputChange: PropTypes.func
}

export default InputField;
