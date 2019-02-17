import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import MainPage from './Components/MainPage';
import SearchPage from './Components/SearchPage';

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
    //filter books by group
    //pass books data to corresponding book shelf
    
    return (
      <div className='app'>
        <Route exact path='/' render={() => (<MainPage books={this.state.books}/>)}></Route>
        <Route path='/search' render={() => (<SearchPage/>)}></Route>
      </div>
    );
  }
}

export default App;
