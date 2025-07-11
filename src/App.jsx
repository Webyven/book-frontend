import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Books from './pages/Books'
import AddBook from './pages/AddBook'

function App() {
  return (
    <div className="p-4">
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/books">Libros</Link> | 
        <Link to="/add-book">Agregar Libro</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </div>
  )
}

export default App
