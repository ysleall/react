
import './App.scss';
import {Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <h1>SOL</h1>
     <img src = './asents/imagens/sol.jpg' alt = 'sol'/>
     < Link to = '/Contato'>
     <p>Ir para a lua</p>
     </Link>
     
    </div>
  );
}

export default App;
