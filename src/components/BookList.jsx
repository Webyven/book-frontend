import React from 'react'

const BookList = ({ books }) => {
  if (!books.length) return <p>No hay libros.</p>
  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          {book.title} – {book.author}
        </li>
      ))}
    </ul>
  )
}

export default BookList