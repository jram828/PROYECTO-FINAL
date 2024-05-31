import './documents.css';
import Layout from '../../components/layout/layout'

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
    <Layout>
      <div className="p-6 bg-primary shadow-md rounded-lg max-w-md mx-auto mt-4 text-white">
      <h1 className="text-2xl font-bold mb-6">Generar Documentos Legales</h1>
      <form>
        <div className="mb-6">
          <label htmlFor="tipodocumento" className="block text-lg font-medium mb-2">
            Documentos a generar:
          </label>
          <select
            className="block w-full mt-1 bg-primary text-white border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            name="tipodocumento"
            id="documentolegal"
            onChange={handleChange}
          >
            <option className="bg-primary text-white" value="">Elija una opción</option>
            <option className="bg-primary text-white" value="1">Poder</option>
            <option className="bg-primary text-white" value="2">Contrato</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Enviar a:</label>
          <div className="flex items-center mb-4">
            <input
              className="mr-2 leading-tight"
              type="checkbox"
              id="email"
              defaultChecked={true}
            />
            <label htmlFor="email" className="text-sm text-white">
              Email
            </label>
          </div>
          <div className="flex items-center">
            <input
              className="mr-2 leading-tight"
              type="checkbox"
              id="sms"
            />
            <label htmlFor="sms" className="text-sm text-white">
              SMS
            </label>
          </div>
        </div>
      </form>
      </div>
    </Layout>
  );
};
export default Documents;
