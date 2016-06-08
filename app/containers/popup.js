import React from 'react'
import ReactDOM from 'react-dom'
import BaseComponent from 'utils/baseComponent'
import { connect } from 'react-redux'
import * as popupActions from 'actions/popup'

class Popup extends BaseComponent {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
  }

  componentWillUnmount() {
    this.removeClickListener()
  }

  componentWillReceiveProps(nextState) {
    if (nextState.open) {
      this.addClickListener()
    } else {
      this.removeClickListener()
    }
  }

  addClickListener() {
    document.body.addEventListener('click', this.toggle)
  }

  removeClickListener() {
    document.body.removeEventListener('click', this.toggle)
  }

  toggle(event) {
    const componentNode = ReactDOM.findDOMNode(this)

    // Toggle visibility when clicked outside of the component
    if (!componentNode.contains(event.target)) {
      this.props.togglePopup()
    }
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
