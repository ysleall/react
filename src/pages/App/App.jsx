
import './App.scss';
import {Link} from 'react-router-dom';


export default function App() {
  return (
    <div className="App">
     <h1>SOL</h1>
     <img src = './assets/imagens/sol.jpg' alt = 'sol'/>
     < Link to = '/Contato'>
     <p>Ir para a lua</p>
     </Link>
       < Link to = '/contador'>
     <p>contagem</p>
     </Link>
    </div>
  );
}
