import React from 'react'
import BaseComponent from 'utils/baseComponent'
import Header from 'components/header/'
import img from 'images/logo.png';

export default class App extends BaseComponent {
  render() {
    console.log(img);
    return (
      <div className="app-body">
        <Header />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
