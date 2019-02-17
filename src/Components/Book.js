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
                <div className="book-title">title
                </div>
                <div className="book-authors">author
                </div>
            </div>            
        )
    }
}