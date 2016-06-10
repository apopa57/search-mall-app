import React from 'react'
import BaseComponent from 'utils/baseComponent'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import Loader from 'components/common/loader'
import ItemGrid from 'components/search/itemGrid'
import ErrorBox from 'components/common/errorBox'
import Pagination from 'containers/searchPagination'
import { selectDisplayType } from 'actions/layout'
import { selectLayoutItemView } from 'selectors/layout'
import classnames from 'classnames'


import {
  selectSearchData,
  selectSearchLoading,
  selectSearchValidation
} from 'selectors/search'

class SearchResult extends BaseComponent {
  constructor(props) {
    super(props)
    this.changeView = this.changeView.bind(this)
  }

  changeView(e) {
    this.props.selectDisplayType(e.target.id)
  }

  render() {
    const { data, loading, isValidated, viewType }　= this.props
    const boxViewClass = classnames({
      'box-icon': true,
      'active': viewType === 'box'
    })

    const listViewClass = classnames({
      'list-icon': true,
      'active': viewType === 'list'
    })

    const listClass = classnames({
      'columns twelve search-page__results__lists': true,
      'list-grid': viewType === 'list'
    })

    return(
      <div className="columns ten search-page__results">
        <div className="columns twelve search-page__results__menubar">
          <div className="search-page__results__title">
            <span>Search results</span>
          </div>
          <div className="search-page__results__gridicon">
            <span onClick={this.changeView} className={boxViewClass} id="box"></span>
            <span onClick={this.changeView} className={listViewClass} id="list"></span>
          </div>
        </div>
        <div className={listClass}>
          <Loader hide={!loading} />
          <ErrorBox
            hide={isValidated}
            content='Please enter search keyword' />
          <div className="block-grid">
            <ItemGrid data={data} hide={loading} displayType={viewType} />
          </div>
        </div>
        <div className="columns twelve search-page__results__pagination">
          <Pagination />
        </div>
      </div>
    )
  }
}

export default connect(createSelector(
  selectSearchData(),
  selectSearchLoading(),
  selectSearchValidation(),
  selectLayoutItemView(),
  (data, loading, isValidated, viewType) => ({ data, loading, isValidated, viewType })
), { selectDisplayType })(SearchResult)
