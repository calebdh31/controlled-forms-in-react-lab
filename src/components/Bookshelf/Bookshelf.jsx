import { useState } from 'react'
import React from 'react'

const Bookshelf = (props) => {
    const [books, setBooks] = useState([
        { title: 'The Fellowship of the Ring', author: 'J.R.R. Tolkien' },
        { title: 'How to Win Friends and Influence People', author: 'Dale Carnegie'}
    ])
    const [newBook, setNewBook] = useState({title: '', author: ''})
    
    const handleInputChange = (event) => {
        const { name, value } = event.target

        setNewBook(prev => ({
            ...prev,
            [name]: value
        }))
        console.log(newBook)
    }
    const handleSubmit = (event) => {
        event.preventDefault()

        if (!newBook.title.trim() || !newBook.author.trim())
            return
        setBooks(prev)
    }

  return (
    <div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form>
        <input
        name="title"
        placeholder='Title'
        value={newBook.title}
        onChange={handleInputChange}
        />
        <input
        name="author"
        placeholder='Author'
        value={newBook.author}
        onChange={handleInputChange}
        />
        <button type='submit'>Add Book</button>
    </form>
  </div>
  <div className="bookCardsDiv">{/* Book cards will display here */}</div>
</div>
  )
}

export default Bookshelf
