import React, { Component } from 'react';
import './App.css';

import BookShelf from './Components/BookShelf';

class App extends Component {
  state = {
    books :[
      {
        title: '1776wtr',
        authors: ['David McCullough', 'author2'],
        imageLinks: {
            thumbnail: "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api"
        },
        group: 'wantToRead'
      },
      {
        title: '1776reading',
        authors: ['David McCullough'],
        imageLinks: {
            thumbnail: "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api"
        },
        group: 'reading'
      },
      {
        title: '1776read',
        authors: ['David McCullough'],
        imageLinks: {
            thumbnail: "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api"
        },
        group: 'read'
      },
    ]
  }

  render() {
    let reading = this.state.books.filter((book) => book.group === 'reading')
    let wantToRead = this.state.books.filter((book) => book.group === 'wantToRead')
    let read = this.state.books.filter((book) => book.group === 'read')
    return (
      <div>
        <div className='list-books'>
          <div className='list-books-title'>
              <h1>MyReads</h1>
          </div>
          <div className='list-books-content'>
            <BookShelf classify="Current Reading" books={reading}></BookShelf>
            <BookShelf classify="Want To Read" books={wantToRead}></BookShelf>
            <BookShelf classify="Read" books={read}></BookShelf>
          </div>
        </div>
        <div className="open-search">
        <button>Add a book</button>
      </div>
      </div>
    );
  }
}

export default App;
