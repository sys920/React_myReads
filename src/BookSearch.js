import React from 'react'

class BookSearch extends React.Component { 

  render() {
    return (   
      <li>
        <div className="book">
          <div className="book-top">      
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url("+
            this.props.imageUrl
            +")" }}></div>
              <div className={this.props.shelf}>
                <select defaultValue={this.props.shelf} onChange={(e) => this.props.changeStatus(e.target.value,this.props.book)} >
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
    )
  }
}

export default BookSearch
