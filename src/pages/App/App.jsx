import './App.scss';
import { Link } from 'react-router-dom';
import Cabecalho from '../../componentes/index.jsx';

export default function App() {
  return (
    <div className="App">
      <Cabecalho />

      <h1>SOL</h1>
      <img src="./assets/imagens/sol.jpg" alt="sol" />

      <Link to="/Contato">
        <p>Ir para a lua</p>
      </Link>

      <Link to="/contador">
        <p>contagem</p>
      </Link>
    </div>
  );
}