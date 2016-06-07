import React from 'react'
import BaseComponent from 'utils/baseComponent'
import { connect } from 'react-redux'
import * as popupActions from 'actions/popup'

class Popup extends BaseComponent {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.open) return null

    return (
      <div className="popup">
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { popup } = state;

  return {
    open: popup.open
  }
}

export default connect(mapStateToProps, {...popupActions})(Popup)
