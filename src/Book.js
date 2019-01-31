import React from 'react'

class Book extends React.Component {
 
  render() {
    return (      
      <div className="bookshelf">
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url("+this.props.book.imageLinks.thumbnail+")" }}></div>
                    <div className={this.props.book.shelf}>
                      <select defaultValue={this.props.book.shelf} onChange={(e) => this.props.changeStatus(e.target.value,this.props.book)} >
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">none</option>              
                      </select>
                  </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    )
  }
}

export default Book
