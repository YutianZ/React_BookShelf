//This component is responsible for moving books to different shelves
//It is displayed on the right bottom corner of Book Component

import React from 'react';

class BookController extends React.Component {
    updateShelf = event => {
        this.props.changeShelf(this.props.book,event.target.value);
    }
    render() {
        return(
            <div className="book-shelf-changer">
                <select onChange={this.updateShelf} defaultValue={this.props.book.shelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookController;