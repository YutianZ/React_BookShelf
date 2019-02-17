import React from 'react';
import Book from '../Book';

class SearchResults extends React.Component {
    render() {
        return(
            <div className="search-books-results">
                <ol className="books-grid">
                    {this.props.books.map(book => {
                        return (<li>
                                    <Book book={book}></Book>
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