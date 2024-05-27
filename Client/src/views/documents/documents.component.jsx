import './documents.css';

import { useNavigate } from "react-router-dom";

const Documents = () => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const tipoDocumento = document.getElementById("documentolegal");
    const tipo = tipoDocumento.value;
    switch (tipo) {
      case "1":
        navigate(`/home/documentos/poder`);
        break;
      case "2":
        navigate(`/home/documentos/contrato`);
        break;
    }
  };

  return (
    <div>
      <h1 className="titulo">Generar Documentos Legales</h1>
      <br />
      <form>
        <br />
        <div className="documentoagenerar">
          <br />
          <label htmlFor="tipodocumento" className="labelgenerardocumento">
            Documentos a generar:
          </label>
          <select
            className="cajagenerardocumento"
            name="tipodocumento"
            id="documentolegal"
            onChange={handleChange}
          >
            <option value="">Elija una opcion</option>
            <option value="1">Poder</option>
            <option value="2">Contrato</option>
          </select>
        </div>
        <br />
        <br />
        <div className="documentoagenerar">
          <label className="labelgenerardocumento"> Enviar a:</label>
          <div>
            <label htmlFor="email">Email</label>
            <input
              className="inputbox"
              type="checkbox"
              id="email"
              defaultChecked="true"
            />
          </div>
          <div>
            <label htmlFor="sms">SMS </label>
            <input className="inputbox" type="checkbox" id="sms" />
          </div>
        </div>
      </form>
    </div>
  );
};
export default Documents;
