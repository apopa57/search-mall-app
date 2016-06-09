import React, { PropTypes } from 'react';

const Button = (props) => {
  const { id, className, name } = props

  return <Button id={id} className={className}>{name}</Button>
}

Button.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string
}

export default Button
