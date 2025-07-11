import React, { useState } from 'react'

const AddBookForm = ({ onSubmit }) => {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedTitle = title.trim();
        const trimmedAuthor = author.trim();

        if (trimmedTitle === '' || trimmedAuthor === '') {
            alert("Por favor, completa los campos antes de enviar.")
            return;
        }

        onSubmit({ title: trimmedTitle, author: trimmedAuthor });
        setAuthor('');
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Título" required />
            <input value={author} onChange={e => setAuthor(e.target.value)} placeholder="Autor" required />
            <button type="submit">Agregar</button>
        </form>
    )
}

export default AddBookForm