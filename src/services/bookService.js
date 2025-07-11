import axios from 'axios'

const BASE_URL = 'http://localhost:5025/api/book'

export const getBooks = async () => {
    const res = await axios.get(BASE_URL)
    return res.data
}

export const addBook = async (book) => {
    await axios.post(BASE_URL, book)
}