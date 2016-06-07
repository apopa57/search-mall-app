import React from 'react'
import BaseComponent from 'utils/baseComponent'

export default class Header extends BaseComponent {
  constructor(props) {
    super(props)

    this.state = {
      query: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="columns twelve">
          <input
            className="u-full-width"
            onChange={this.handleChange}
            placeholder="Search"
            type="search"
            value={this.state.query} />
          <button
            onClick={this.handleSubmit}>
            <i className="search-icon" />
          </button>
          <button
            onClick={this.handleSubmit}>
            <i className="settings-icon" />
          </button>
        </div>
      </form>
    );
  }
}
