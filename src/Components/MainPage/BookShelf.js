//This component is responsible for display books in each shelf
//It accept props shelf title and books
import React from 'react';
import Book from '../Book';

class BookShelf extends React.Component {
    render() {
        return(
            <div className='bookshelf'>
                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book, index) => {
                            return (<li key={index}>
                                <Book books={this.props.books} changeShelf={this.props.changeShelf} book={book} />
                            </li>
                        )})}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;