# MyReads 
-The Book shelf that you could collect books from external BookAPI and keeep it in the each shlef whatever you collect  
-This repository is the starter code for all Udacity students.


# code

./src/App.css:Styles for your app. Feel free to customize this as you desire.

./src/App.js:This is the main source code 
./src/Book.js: The books shelf which have currentreading, wnat to see and  read
./src/BookSearch.js: The books which have serached from API
./src/ BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
./src/icons/  images for your app. Use at your discretion.
./src/index.css # Global styles. You probably won't need to change anything here.
./src/index.js # You should not need to modify this file. It is used for DOM rendering only.

# Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)


# Requirement
[Main Page]
- The main page shows 3 shelves for books. Each book is shown on the correct shelf, along with its title and all of its authors.
- The main page shows a control that allows users to move books between shelves. The control should be tied to each book instance. The functionality of moving a book to a different shelf works correctly.
- When the browser is refreshed, the same information is displayed on the page.

[Search Page]
- The search page behaves correctly:
a) As the user types into the search field, books that match the query are displayed on the page, along with their titles and authors. You can use throttle/debounce but are not required to do so.
b) Search results are not shown when all of the text is deleted out of the search input box.
c) Invalid queries are handled and prior search results are not shown.
d) The search works correctly when a book does not have a thumbnail or an author. (To test this, try searching for "poetry" and "biography"). (It's fine to filter out books with missing thumbnails.)
e) The user is able to search for multiple words, such as “artificial intelligence.”

- Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf.
- If a book is assigned to a shelf on the main page and that book appears on the search page, the correct shelf should be selected on the search page. If that book's shelf is changed on the search page, that change should be reflected on the main page as well. The option "None" should be selected if a book has not been assigned to a shelf.
- When an item is categorized on the search page and the user navigates to the main page, it appears on that shelf in the main page. 

[Routing]
- The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search.
- The search page contains a link to the main page. When the link is clicked, the main page is displayed and the URL in the browser’s address bar is /.
