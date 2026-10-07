import {useState} from "react";
import './index.scss';


export default function Text () {
const [descricao1,setDescricao1] = useState ('EU AMO INFO')
const [cor,setCor] = useState ("")
const [texto,setTexto] = useState ("")
const [novotexto, setNovoTexto] = useState("")


function mudar(e){
    let novovalor = e.target.value
    setDescricao1(novovalor)
}
    
function mudarcor(e) {
    let novacor = e.target.value
    setCor(novacor)
}

function pegartexto(e) {
    setNovoTexto(e.target.value)
}

function ret() {
    setTexto(novotexto)
}


return(
<div className="ola" style={{backgroundColor: cor}} >

    <section>
        <h1>{descricao1}</h1>
        <input onChange={mudar} type = "text" ></input>
    </section> 

<hr/>

    <section>
        <h1>A cor selecionada e : {cor}</h1>
        <input onChange={mudarcor} type = "color" ></input>
    </section>

<hr/>

    <section>
        <h1> {texto}</h1>
        <input onChange={pegartexto} type = "text" ></input>
        <button onClick={ret}>AQUI</button>
    </section>



</div>


)}



