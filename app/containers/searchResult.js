import React from 'react'
import BaseComponent from 'utils/baseComponent'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import Loader from 'components/common/loader'
import ErrorBox from 'components/common/errorBox'
import Pagination from 'containers/searchPagination'
import ResultList from 'components/search/result'
import { selectDisplayType } from 'actions/layout'
import { selectLayoutItemView } from 'selectors/layout'

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

    return(
      <div className="columns ten search-page__results">
        <Loader hide={!loading} />
        <ErrorBox hide={isValidated} content='Please enter search keyword' />
        <ResultList {...this.props} changeView={this.changeView} />
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
