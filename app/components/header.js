import React from 'react';
import BaseComponent from 'utils/baseComponent';
import Genres from 'containers/genres'

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
      <header>
        <div className="container">
          <div className="row">
            <div className="columns twelve">
              <h1>Rakuten Search App</h1>
            </div>
          </div>
          <div className="columns twelve">
            <form onSubmit={this.handleSubmit}>
              <div className="columns three">
                <Genres />
              </div>
              <div className="columns seven">
                <input
                  className="u-full-width"
                  onChange={this.handleChange}
                  placeholder="Search"
                  type="search"
                  value={this.state.query} />
              </div>
              <div className="columns two">
                <button
                  className="button-primary u-full-width"
                  onClick={this.handleSubmit}>
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </header>
    );
  }
}
