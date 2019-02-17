//This componneng is responsible for search books and display returned books

import React from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

class SearchPage extends React.Component {
    state = {
        books: []
    }
    getSearchResults = (books) => {
        this.setState({books:books})
    }
    render() {
        return(
        <div>
            <SearchBar getSearchResults={this.getSearchResults}/>
            <SearchResults books = {this.state.books} />
        </div>)
    }
}

export default SearchPage;