import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import * as BooksAPI from './API/BooksAPI';
import MainPage from './Components/MainPage/MainPage';
import SearchPage from './Components/SearchPage/SearchPage';

class App extends Component {
  state = {
    books :[]
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  changeShelf = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf)
      .then(res => {
        changedBook.shelf = shelf;
        this.setState(prevState => ({
          books: prevState.books.filter(book => book.title !== changedBook.title)
            .concat(changedBook)
        }))
      })
  }
  render() {
    //filter books by group
    //pass books data to corresponding book shelf
    return (
      <div className='app'>
        <Route exact path='/' render={() => (<MainPage changeShelf={this.changeShelf} books={this.state.books}/>)}></Route>
        <Route path='/search' render={() => (<SearchPage books={this.state.books} changeShelf={this.changeShelf}/>)}></Route>
      </div>
    );
  }
}

export default App;
