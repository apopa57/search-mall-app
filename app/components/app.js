import React from 'react'
import BaseComponent from 'utils/baseComponent'
import Header from 'components/header/'

export default class App extends BaseComponent {
  render() {
    return (
      <div className="app-body">
        <Header />
        <div className="container page-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}
