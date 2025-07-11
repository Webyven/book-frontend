import React from 'react'

const BookItem = ({ book }) => {
    return (
        <li key={book.id}>
            {book.title} – {book.author}
        </li>
    )
}

export default BookItem