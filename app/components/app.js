import React from 'react'
import BaseComponent from 'utils/baseComponent'

export default class App extends BaseComponent {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="columns twelve">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
