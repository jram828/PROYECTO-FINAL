import { Link } from 'react-router-dom';
import './password.css';
import Layout from '../../components/layout/layout';

function Password() {
  return (
    <Layout>
      <div className="contenedorrecordatorio">
        <div>
        </div>
        <h1 className="titulo">Recordar contraseña</h1>
        <br />

        <form>
          <br />
          {/* <div className="recordar-password">
            <label className="label-password" htmlFor="usuario">
              Usuario:
            </label>
            <input type="text" name="usuario" id="username" />
          </div> */}
          <br />
          <br />
          <div className="recordar-password">
            <label className="label-password" htmlFor="correo">
              Email:
            </label>
            <input type="email" name="correo" id="email" />
          </div>
          <br />
          <br />
          <div className="recordar-password">
            <input className="inputbox2" type="submit" name="Enviar" />
            <br />
            <br />
          
            <Link to ='/'><input
                type="button"
                name="volver"
                value="volver"
                className="button"
              />
              </Link>
          </div>
          <br />
          <br />
        </form>

      </div>
    </Layout>
  )
}

export default Password