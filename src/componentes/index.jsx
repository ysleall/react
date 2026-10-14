import './index.scss';

export default function Cabecalho(props) {
    return (
        <div className="comp-cabecalho">
            <h1>{props.titulo ?? "olA"}</h1>
        </div>
    );
}