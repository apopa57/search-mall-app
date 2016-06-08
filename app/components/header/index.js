import React, { PropTypes } from 'react'
import SearchBar from 'containers/searchBar'
import Popup from 'containers/popup'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'

const Header = (props) => {
  const goTopPage = () => {
    props.push('/')
  }

  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="columns two">
            <h1 onClick={goTopPage}>Rakuten Search App</h1>
          </div>
          <div className="columns ten relative">
            <SearchBar />
            <Popup>
              <div>Content</div>
            </Popup>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  push: PropTypes.func
}

export default connect(null, { push })(Header)
