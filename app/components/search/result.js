import React, { PropTypes } from 'react';
import ErrorBox from 'components/common/errorBox'
import ItemGrid from 'components/search/itemGrid'
import classnames from 'classnames'
import MenuBar from 'components/search/MenuBar'

const ResultList = (props) => {
  const { data, loading, viewType, isValidated, changeView } = props

  const listClass = classnames({
    'columns twelve search-page__results__lists': true,
    'list-grid': viewType === 'list'
  })

  if(!data.length) return false;

  return (
    <div>
      <MenuBar viewType={viewType} changeView={changeView} />
      <div className={listClass}>
        <div className="block-grid">
          <ItemGrid data={data} hide={loading} displayType={viewType} />
        </div>
      </div>
    </div>
  )
}

export default ResultList;
