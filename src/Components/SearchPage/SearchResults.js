import React from 'react';
import Book from '../Book';

class SearchResults extends React.Component {
    render() {
        return(
            <div className="search-books-results">
                <ol className="books-grid">
                    {this.props.newBooks.map((book, index) => {
                        return (<li key={index}>
                                    <Book changeShelf={this.props.changeShelf} book={book} books={this.props.books}></Book>
                                </li>
                                )
                            }
                        )
                    }
                </ol>
            </div>
        )
    }
}

export default SearchResults;