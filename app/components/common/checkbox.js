import React, { PropTypes } from 'react'

const Checkbox = (props) => {
  const { id, className, value, onChange, name } = props

  return(
    <div className="filter-box__inputfield">
      <div className={className}>
        <input
          type="checkbox"
          checked={value}
          onChange={onChange}
          id={id}/>
        <label htmlFor={id} className="noselect">{name}</label>
      </div>
    </div>
  )
}

Checkbox.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.number,
  name: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string
}

export default Checkbox;
