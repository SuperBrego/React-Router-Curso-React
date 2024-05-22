import './App.css';

// Aula 1 - Configurando React Router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Páginas
import Home from './pages/Home';
import About from './pages/About';

// Componentes
import Navbar from './components/Navbar';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import SearchForm from './components/SearchForm';
import Search from './pages/Search';

function App() {
  
  return (
    <>
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products/:id' element={<Product />} />
          {/* Nested Route */}
          <Route path='/products/:id/info' element={<Info />} />
          {/* Search */}
          <Route path='/search' element={<Search />} />
          {/* 404 */}
          <Route path='*' element={<NotFound />} />
          {/* Redirecionamento */}
          <Route path='/company' element={<Navigate to={'/about'} />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App;
