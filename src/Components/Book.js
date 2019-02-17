//This component is responsible for displaying books' data
//It is a part of BookShelf component

import React from 'react';
import BookController from './BookController';

class Book extends React.Component {
    render() {
        return(
            <div className="book">
                <div className='book-top'>
                    <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`}}>
                    </div>
                    <BookController/> 
                </div>
                <div className="book-title">
                    {this.props.book.title}
                </div>
                <div className="book-authors">
                    {
                        this.props.book.authors.map((author) => {
                            return (
                                <p>{author}</p>
                            )
                        })
                    }
                </div>
            </div>            
        )
    }
}

export default Book;

//