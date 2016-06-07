import React from 'react'
import BaseComponent from 'utils/baseComponent'
import { connect } from 'react-redux'
import * as popupActions from 'actions/popup'

class Popup extends BaseComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="popup">
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { popup } = state;

  return {
    popup: popup
  }
}

export default connect(mapStateToProps, {...popupActions})(Popup)
