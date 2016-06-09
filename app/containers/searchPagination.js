import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { paginateSearching } from 'actions/search'
import Pagination from 'react-paginate'
import { createSelector } from 'reselect'
import { selectSearchParams } from 'selectors/search'
import { selectSearchPageCount } from 'selectors/pagination'

const SearchPagination = (props) => {
  const _handleClick = (data) => {
    const { paginateSearching } = props
    const currentPage = data.selected + 1
    paginateSearching(currentPage)
  }

  const { pageCount } = props;

  if(pageCount < 2) return false;

  return(
    <Pagination
      previousLabel={'<'}
      nextLabel={'>'}
      breakLabel={<span>...</span>}
      pageNum={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={1}
      clickCallback={_handleClick}
      containerClassName={"pagination"}
      subContainerClassName={"pages pagination"}
      activeClassName={"active"} />
  )
}

SearchPagination.propTypes = {
  paginateSearching: PropTypes.func,
  pageCount: PropTypes.number
}

export default connect(createSelector(
  selectSearchParams(),
  selectSearchPageCount(),
  (searchParams, pageCount) => ({ searchParams, pageCount })
), { paginateSearching })(SearchPagination)
