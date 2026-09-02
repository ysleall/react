
import './index.scss';
import {Link} from 'react-router-dom';


export default function Contato() {
  return (
    <div className="lua">
     <h1>LUA</h1>
     <img src = './assets/imagens/luas.webp' alt = 'lua'/>

     < Link to = '/'>
     <p>Ir para o sol</p>
     </Link>
     
    </div>
  );
}

