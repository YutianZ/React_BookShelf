//This componneng is responsible for search books and display returned books

import React from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

class SearchPage extends React.Component {
    state = {
        newBooks: []
    }
    getSearchResults = (newBooks) => {
        this.setState({newBooks: newBooks})
    }
    render() {
        return(
        <div>
            <SearchBar getSearchResults={this.getSearchResults}/>
            <SearchResults changeShelf={this.props.changeShelf} newBooks = {this.state.newBooks} books={this.props.books}/>
        </div>)
    }
}

export default SearchPage;