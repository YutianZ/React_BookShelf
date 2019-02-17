import React from 'react';
import Book from './Book';

class BookShelf extends React.Component {
    render() {
        return(
            <div className='bookshelf'>
                <h2 className="bookshelf-title">{this.props.classify}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map(book => {
                            return (<li>
                                <Book book={book} />
                            </li>
                        )})}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;