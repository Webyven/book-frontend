import React from "react";
import { useState, useEffect } from "react";
import { getBooks } from "../services/bookService";
import BookList from "../components/BookList";

const Books = () => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getBooks()
            .then((data) => setBooks(data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    })

    if (loading) return <p>Cargando...</p>
    if (error) return <p>{error}</p>

    return <BookList books={books} />
}

export default Books