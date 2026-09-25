
import './index.scss';

export default function Contato() {

  function Passou() {
    alert("Você passou o mouse sobre o texto");
  }

  function retorno(e) {
    let retorno = e.target.value;
    alert("Nome digitado: " + retorno);
  }

  function dp(e) {
    let dp = e.target.value;
    alert("Departamento selecionado: " + dp);
  }

  function tp(e) {
    let tp = e.target.value;
    alert("Tipo de funcionário: " + tp);
  }

  function pa() {
    alert("Funcionário cadastrado com sucesso!");
  }

  return (
    <div className="lua">

      <h1>Cadastro da Empresa</h1>

      <input
        onChange={retorno}
        type="text"
        placeholder="Nome do Funcionário"
      />

      <select onChange={dp}>
        <option>Selecione seu departamento</option>
        <option>Informática</option>
        <option>Administração</option>
        <option>Recursos Humanos</option>
        <option>Marketing</option>
        <option>Financeiro</option>
      </select>

      <div className="Opcoes">

        <label>
          <input
            type="radio"
            name="opcao"
            value="Efetivo"
            onChange={tp}
          />
          Efetivo
        </label>

        <label>
          <input
            type="radio"
            name="opcao"
            value="Jovem Aprendiz"
            onChange={tp}
          />
          Jovem Aprendiz
        </label>

        <label>
          <input
            type="radio"
            name="opcao"
            value="Estagiário"
            onChange={tp}
          />
          Estagiário
        </label>

        <label>
          <input
            type="radio"
            name="opcao"
            value="Temporário"
            onChange={tp}
          />
          Temporário
        </label>

      </div>

      <div className="mouse">
        <p onMouseEnter={Passou}>
          Passe seu mouse aqui!
        </p>
      </div>

      <button onClick={pa}>
        Finalize o cadastro
      </button>

    </div>
  );
}
