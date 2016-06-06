import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

export const PageNotFound = (props) => {
  return(
    <div className="container">
      <div className="row page-not-found">
        <div className="columns twelve page-not-found__content">
          <h2 className="page-not-found__title">
            Page not found
          </h2>
          <div className="page-not-found__icon">
            <i />
          </div>
          <button className="page-not-found__btn" onClick={() => props.push('/')}>
            Back to top page
          </button>
        </div>
      </div>
    </div>
  )
}

PageNotFound.propTypes ={
  push: PropTypes.func
}

export default connect(null, { push })(PageNotFound);


