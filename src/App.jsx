import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NarBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="main-container" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <div className="container">
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a Zara! Explora nuestros productos." />} />
            <Route path="/category/:id" element={<ItemListContainer greeting="Productos filtrados" />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
