import React from 'react'
import BaseComponent from 'utils/baseComponent'

export default class App extends BaseComponent {
  render() {
    return (
      <div className="app-body container">
        {this.props.children}
      </div>
    )
  }
}
