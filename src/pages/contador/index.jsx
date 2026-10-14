


import { useState } from 'react';
import './index.scss';
import Cabecalho from '../../componentes/index.jsx';

export default function Contador() {
  const [contagem, setContagem] = useState(0);

  function mais() {
    if (contagem < 20) {
      setContagem(contagem + 1);
    }
  }

  function menos() {
    if (contagem > 0) {
      setContagem(contagem - 1);
    }
  }

  return (
    <div className='contador'>
        <Cabecalho titulo = "vamo vamo" />
      <h1>Contador</h1>
      <p>{contagem}</p>
      <button onClick={mais}>+</button>
      <button onClick={menos}>-</button>
    </div>
  );
}



    
