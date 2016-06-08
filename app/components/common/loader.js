import React from 'react';

export default (props) => {
  if (props.hide) return null

  return (
    <div className="loading-icon"></div>
  )
}
