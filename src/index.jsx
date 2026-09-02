import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/contato/index.scss';
import App from './pages/App/App.jsx';
import './pages/App/App.scss'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Contato from './pages/contato/index.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
  <Route path = '/' element = {<App/>}/>
  <Route path = '/contato' element = {<Contato/>}/>

    </Routes>
    
    
    </BrowserRouter>

  </React.StrictMode>
);

