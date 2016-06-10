import React, { PropTypes } from 'react'
import classnames from 'classnames'

const ResultList = (props) => {
  const { viewType, changeView, loading } = props

  const boxViewClass = classnames({
    'box-icon': true,
    'active': viewType === 'box'
  })

  const listViewClass = classnames({
    'list-icon': true,
    'active': viewType === 'list'
  })

  return (
    <div className="columns twelve search-page__results__menubar">
      <div className="search-page__results__title">
        <span>Search results</span>
      </div>
      <div className="search-page__results__gridicon">
        <span onClick={changeView} className={boxViewClass} id="box"></span>
        <span onClick={changeView} className={listViewClass} id="list"></span>
      </div>
    </div>
  )
}

export default ResultList;
