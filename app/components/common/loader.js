import React from 'react';

export default (props) => {
  if (props.hide) return null

  return (
    <div className="loader-box">
      <div className="loading-icon" />
    </div>
  )
}
