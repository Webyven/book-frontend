import { useNavigate } from 'react-router-dom'
import { addBook } from '../services/bookService'
import AddBookForm from '../components/AddBookForm'
import { useState } from 'react';

function AddBook() {
    const navigate = useNavigate()
    const [success, setSuccess] = useState(false);

    const handleAdd = async (book) => {
        try {
            await addBook(book)
            setSuccess(true);
            setTimeout(() => navigate('/books'), 1000)
        } catch (err) {
            console.error(err)
            alert('Error al agregar libro')
        }
    }

    return (
        <>
            <AddBookForm onSubmit={handleAdd} />
            { success && <p>Libro añadido correctamente!</p>}
        </>
    )
}

export default AddBook
