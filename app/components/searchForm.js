import React from 'react';
import BaseComponent from 'utils/baseComponent';
import jsonp from 'jsonp-es6'
import { API_KEY, ROOT_URL, SEARCH_API_ENDPOINT } from 'constants/base'

export default class SearchForm extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      query: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      query: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const url = ROOT_URL+ SEARCH_API_ENDPOINT

    const params = {
      applicationId: API_KEY,
      format: 'jsonp',
      keyword: this.state.query
    }

    jsonp(url, params)
      .then(result => this.setState({ items: response }))
      .catch(error => console.error(error))
  }

  render() {
    return (
      <div className="row">
        <div className="columns twelve">
          <form onSubmit={this.handleSubmit}>
            <div className="columns three">
              <select className="u-full-width">
                <option>Category</option>
              </select>
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
                className="button-primary"
                onClick={this.handleSubmit}>
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
