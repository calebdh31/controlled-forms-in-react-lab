import { useState } from 'react'
import React from 'react'

const Bookshelf = (props) => {
    const [books, setBooks] = useState([
        { title: 'The Fellowship of the Ring', author: 'J.R.R. Tolkien' },
        { title: 'How to Win Friends and Influence People', author: 'Dale Carnegie'}
    ])
    const [newBook, setNewBook] = useState({title: '', author: ''})
    
    const handleChange = (event) => {
    setNewBook({...newBook, [event.target.name] : event.target.value})
  }
    const handleSubmit = (event) => {
        event.preventDefault()
        setBooks(prevBook => [...prevBook, newBook])
    }

  return (
    <div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit}>
        <input
        name="title"
        placeholder='Title'
        value={newBook.title}
        onChange={handleChange}
        />
        <input
        name="author"
        placeholder='Author'
        value={newBook.author}
        onChange={handleChange}
        />
        <button type='submit'>Add Book</button>
    </form>
  </div>
  <div className="bookCardsDiv">{books.map((book, index)  => (
    <ul
    key={index}
    style={{backgroundColor: "#c0c0c0ff",
        color: "black"
    }}
    >
    <li>
        {book.title}
    </li>
    <li>
        {book.author}
    </li>
    </ul>
  ))}</div>
</div>
  )
}

export default Bookshelf
