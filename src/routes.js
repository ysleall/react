import './pages/contato/index.scss';
import App from './pages/App/App.jsx';
import './pages/App/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from './pages/contato/index.jsx';
import Naoencontrado from './pages/naoencontrado/naoencontrado.jsx';
import './pages/contador/index.scss';
import Contador from './pages/contador/index.jsx';
import './pages/text/index.scss';
import Text from './pages/text/index.jsx';
import Calculadora from './pages/calculadora/index.jsx';

export default function Routess() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='*' element={<Naoencontrado />} />
        <Route path='/contador' element={<Contador/>} />
        <Route path='/text' element={<Text/>} />
          <Route path='/cal' element={<Calculadora/>} />
      </Routes>
    </BrowserRouter>
  );
}