import { useState } from 'react';
import './index.scss';

export default function Calculadora() {
  const [num1, setnum1] = useState('');
  const [num2, setnum2] = useState('');
  const [resp, setresp] = useState(0);
  const [titulo2, setTitulo2] = useState(false);


function mais() {
  let soma = Number(num1) + Number(num2);
  setresp(soma);
}

function alterartitulo2(e) {
  let novo = e.target. checked
  setTitulo2(novo)

}


  return (
    <section className="section">
      <div className="contador">

        <h2>Calculadora</h2>

        <div className="coisas">

          <input type="number" value={num1} onChange={(e) => setnum1(e.target.value)} />
          <input type="number" value={num2} onChange={(e) => setnum2(e.target.value)} />
          <div>=</div>

          <div>{resp}</div>

          <button onClick={mais}>+</button>


        </div>
<section className="quiz">
    <h1>Gosta de viajar?{titulo2 ? "Sim" : "Não"}</h1>
    <input type="checkbox" checked={titulo2} onChange={alterartitulo2}/>

</section>

      </div>
    </section>



  );
}