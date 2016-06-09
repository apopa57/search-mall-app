import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { searchItemsIfNeed, paginateSearching } from 'actions/search'
import Pagination from 'react-paginate'
import { createSelector } from 'reselect'
import { selectSearchParams } from 'selectors/search'
import { selectSearchPageCount } from 'selectors/pagination'

const SearchPagination = (props) => {
  const _handleClick = (data) => {
    const { searchItemsIfNeed, paginateSearching, searchParams } = props
    const currentPage = data.selected + 1
    paginateSearching(currentPage)
    console.log(searchParams)
    // searchItemsIfNeed(props.searchParams)
  }

  const { pageCount } = props;

  if(pageCount < 2) return false;

  return <Pagination previousLabel={'<'}
           nextLabel={'>'}
           breakLabel={<span>...</span>}
           pageNum={pageCount}
           marginPagesDisplayed={2}
           pageRangeDisplayed={1}
           clickCallback={_handleClick}
           containerClassName={"pagination"}
           subContainerClassName={"pages pagination"}
           activeClassName={"active"} />
}

export default connect(createSelector(
  selectSearchParams(),
  selectSearchPageCount(),
  (searchParams, pageCount) => ({ searchParams, pageCount })
), { searchItemsIfNeed, paginateSearching })(SearchPagination)
