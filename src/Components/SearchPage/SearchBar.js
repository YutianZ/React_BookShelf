import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../API/BooksAPI';

class SearchBar extends React.Component {
    state = {
        query: ''
    }
    handleQuery = (event) => {
        this.setState({query : event.target.value});
        BooksAPI.search(this.state.query)
            .then((books) => {
                if(books) {
                    this.props.getSearchResults(books);
                }
            });
    }
    render() {
        return(
            <div className="search-books-bar">
              <Link to='/'><button className="close-search">Close</button></Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" onChange={this.handleQuery} value={this.state.query}/>

              </div>
            </div>
        )
    }
}
export default SearchBar;