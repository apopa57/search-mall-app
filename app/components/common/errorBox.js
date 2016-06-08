import React, { PropTypes } from 'react'

const ErrorBox = (props) => {
  if(props.hide) return false;

  return(
    <div className="error-box">
      <span className="error-box__msg">
        {props.content}
      </span>
    </div>
  )
}

ErrorBox.propTypes = {
  content: PropTypes.string,
  hide: PropTypes.bool
}

export default ErrorBox
