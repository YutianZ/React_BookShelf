import React from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';

class MainPage extends React.Component {
    render() {
        let reading = this.props.books.filter((book) => book.group === 'reading')
        let wantToRead = this.props.books.filter((book) => book.group === 'wantToRead')
        let read = this.props.books.filter((book) => book.group === 'read')
        return(
            <div>
                <div className='list-books'>
                <div className='list-books-title'>
                    <h1>MyReads</h1>
                </div>
                <div className='list-books-content'>
                    <BookShelf shelfTitle="Current Reading" books={reading}></BookShelf>
                    <BookShelf shelfTitle="Want To Read" books={wantToRead}></BookShelf>
                    <BookShelf shelfTitle="Read" books={read}></BookShelf>
                </div>
                </div>
                <div className="open-search">
                    <Link to='search'><button>Add a book</button></Link>
                </div>
            </div>
        )
    }
}

export default MainPage;