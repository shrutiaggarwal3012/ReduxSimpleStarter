import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { 'term': '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          className="search-bar"
          value={this.state.term}
          onKeyPress={this.handleKeyPress}
          onChange={ event => this.onInputChange(event.target.value)} />;
      </div>
    )
  }

  onInputChange(term) {
    this.setState({'term': term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
