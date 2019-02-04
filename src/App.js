import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book'
import BookSearch from './BookSearch'
import { Route, Link } from 'react-router-dom'


class App extends React.Component {
  state = {
    searchInput : "",
    searched : [],
    bookLists : [],
    noResult : "",
   }

  componentDidMount() {
    BooksAPI.getAll()
    .then(result => {      
     this.setState({bookLists : result})  
     })          
  }

  searchInput = (e) => { 
   this.setState({searchInput : e.target.value})
    BooksAPI.search(e.target.value).then(result => {

      if(result) {
        if (result.error === "empty query") {       
          this.setState({noResult : "No maches. Please try some different terms."}) 
          this.setState({searched : []})  
        } else {
          this.setState({searched : result}); 
          this.setState({noResult : ""}) 
        }  
      } else {
        this.setState({noResult : ""}) 
        this.setState({searched : []}) 
      } 
      
    }) 
  }

  changeStatus =(shelf, book) => {

    BooksAPI.update(book, shelf)
    
    if(this.state.bookLists.find(c =>c.id === book.id)) {
      
      book.shelf = shelf 
      this.setState((prevState) => ({
        bookLists : prevState.bookLists.filter((c) => {
          return c.id !== book.id;
        })
      }))

      this.setState((prevState) => ({
        bookLists : [...prevState.bookLists, book]
      }))

    } else {
      book.shelf = shelf 
      this.setState((prevState) => ({
        bookLists : [...prevState.bookLists, book]
      }))
    }        
    
    if (shelf === "none"){
      this.setState((prevState) => ({
        bookLists : prevState.bookLists.filter((c) => {
          return c.id !== book.id;
        })
      }))
    }

  }

  serarchReset = () => {
    this.setState({searched : []}) 
  }

  render() {
    return (
      <div>
        <Route exact path='/search' render = {() => (      
          <div className="app">    
            <div className="search-books">
              <div className="search-books-bar">
              <Link to='/'><button className="close-search" >Close</button></Link>
                <div className="search-books-input-wrapper">
                  <input type="text"  value={this.state.searchInput} onChange={this.searchInput} placeholder="Search by title or author"/>
                </div>
              </div>
              <div className="search-books-results">
                <div>{ this.state.noResult !== "" && this.state.noResult}</div>
                <ol className="books-grid"> 
                  {    
                    this.state.searched.map((book, index) => (   

                       <BookSearch key ={index}  changeStatus ={this.changeStatus} book={book} shelf={
                        this.state.bookLists.find(c => c.id === book.id) ?
                        this.state.bookLists.find(c => c.id === book.id).shelf :
                        "none"                
                       } imageUrl ={book.imageLinks ? book.imageLinks.thumbnail : "none" }
                        />                         
                    ))     
                  }                    
                </ol>
              </div>
            </div>
          </div>       
        )} />

        <Route exact path='/' render = {() => (     

          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
                <ol className="books-grid"> 
                  {
                    this.state.bookLists.filter((t) => {
                      return t.shelf ==="currentlyReading"
                    }).map((book, index) => (
                      <Book key ={index}  changeStatus ={this.changeStatus} book={book}/> 
                    ))     
                  }                       
                </ol>              
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
                <ol className="books-grid"> 
                  {
                    this.state.bookLists.filter((t) => {
                      return t.shelf ==="wantToRead"
                    }).map((book, index) => (
                      <Book key ={index}  changeStatus ={this.changeStatus} book={book}/> 
                    ))     
                  }                       
                </ol>              
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
                <ol className="books-grid"> 
                  {
                    this.state.bookLists.filter((t) => {
                      return t.shelf ==="read"
                    }).map((book, index) => (
                      <Book key ={index}  changeStatus ={this.changeStatus} book={book}/> 
                    ))     
                  }                       
                </ol>              
            </div>

            <div className="open-search">
            <Link to='/search'><button onClick={this.serarchReset} >Add a book</button></Link>
            </div>
          </div>     
      
        )} />
    </div>
    )
  }
}

export default App
