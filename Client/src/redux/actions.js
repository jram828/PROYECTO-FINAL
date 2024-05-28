import axios from "axios";

export const SET_AUTHENTICATED = "SET_AUTHENTICATED";
export const SET_USERTOKEN = "SET_USERTOKEN";
export const FILTER_ABOGADO = "FILTER_NAME_ABOGADO";
export const GET_ABOGADOS = "GET_ABOGADOS";
export const GET_CLIENTES = "GET_CLIENTES";
export const GET_BY_ID_ABOGADO = "GET_BY_ID_ABOGADO";
export const GET_BY_ID_CLIENTE = "GET_BY_ID_CLIENTE";
export const FILTER_CLIENTE = "FILTER_NAME_CLIENTE";
export const SET_SOURCE = "SET_SOURCE";
export const ORDER_ABOGADOS = "ORDER_ABOGADOS";
export const ORDER_CLIENTES = "ORDER_CLIENTES";
export const DELETE_ABOGADO = "DELETE_ABOGADO";
export const DELETE_CLIENTE = "DELETE_CLIENTES";
export const GET_TIPOSDECASOS = "GET_TIPOSDECASOS";
export const GET_CASOS = "GET_CASOS";
export const FILTER_CASOS = "FILTER_CASOS";
export const ORDER_CASOS = "ORDER_CASOS";
export const GET_CASO_BY_ID = "GET_CASO_BY_ID";
export const DELETE_CASO = "DELETE_CASO;";
export const POST_CITA = "POST_CITA";
export const GET_CITAS = "GET_CITAS";
export const POST_CONSULTA = "POST_CONSULTA";

export const LOGIN = "LOGIN";
export const LOG = "LOG";
export const GET_USERS = "GET_USERS";
export const GET_ACTIONS = "GET_ACTIONS";
export const DELETE_ACTION = "DELETE_ACTION";
export const GET_ACTION_DETAIL = "GET_ACTION_DETAIL";
export const SET_FILTERED_ACTIONS = "SET_FILTERED_ACTIONS";
export const GET_TRANSACTIONS = "GET_TRANSACTIONS";
export const SET_METRICS = "SET_METRICS";
export const SET_ERROR = "SET_ERROR";
export const SET_ABOGADO = "SET_ABOGADO";
export const SET_CLIENTE = "SET_CLIENTE";
export const UPDATE_ACTION = "UPDATE_ACTION";
export const GET_CATEGORIES_EXPENSE = "GET_CATEGORIES_EXPENSE";
export const GET_CATEGORIES_INCOME = "GET_CATEGORIES_INCOME";
export const CLEAN_USER = "CLEAN_USER";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOG_FAILED = "LOG_FAILED";
export const INCREMENT_NUMBER_PUNTUACION = "INCREMENT_NUMBER_PUNTUACION";
export const CLEAN_ACTIONS = "CLEAN_ACTIONS";
export const UPDATE_ACTION_ERROR = "UPDATE_ACTION_ERROR";


//const URL = 'http://localhost:3001/'
//const URL = 'https://legaltech-6u3y.onrender.com/'
const URL = "https://legaltech-develop.onrender.com/";

export const setAuth = (auth) => {
  console.log("Verificar autenticacion:", auth);
  return {
    type: SET_AUTHENTICATED,
    payload: auth,
  };
};

export const setUserToken = (userToken) => {
  console.log("User token:", userToken);
  return {
    type: SET_USERTOKEN,
    payload: userToken,
  };
};

export const setSource = (source) => {
  console.log("Verificar source:", source);
  return {
    type: SET_SOURCE,
    payload: source,
  };
};

export const setAbogado = (source) => {
  console.log("Limpiar estado detail:", source);
  return {
    type: SET_ABOGADO,
    payload: source,
  };
};

export const setCliente = (source) => {
  console.log("Limpiar estado detail:", source);
  return {
    type: SET_CLIENTE,
    payload: source,
  };
};

export const getClientes = () => {
  const endpoint = `${URL}clientes?pagina=1&porPagina=50`;
  return async (dispatch) => {
    const { data } = await axios.get(endpoint);
    return dispatch({
      type: GET_CLIENTES,
      payload: data,
    });
  };
};

export const getAbogados = () => {
  const endpoint = `${URL}abogados?pagina=1&porPagina=50`;

  return async (dispatch) => {
    const { data } = await axios.get(endpoint);
    return dispatch({
      type: GET_ABOGADOS,
      payload: data,
    });
  };
};

export const getByIdAbogado = (cedulaAbogado) => {
  const endpoint = `${URL}abogados/cedulaabogado?cedulaAbogado=${cedulaAbogado}`;
  console.log("URL", endpoint);
  return async (dispatch) => {
    // try {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: GET_BY_ID_ABOGADO,
        payload: data,
      });
    // } catch (error) {
    //   throw error;
    // }
  };
};

export const getByIdCliente = (cedulaCliente) => {
  const endpoint = `${URL}clientes/cedulacliente?cedulaCliente=${cedulaCliente}`;
  console.log("URL", endpoint);
  return async (dispatch) => {
    // try {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: GET_BY_ID_CLIENTE,
        payload: data,
      });
    // } catch (error) {
    //   throw error;
    // }
  };
};

export const filterCliente = (filtro) => {
  const endpoint = `${URL}clientes?${filtro}`;
  console.log("URL", endpoint);
  return async (dispatch) => {
    // try {
      const { data } = await axios.get(endpoint);

      return dispatch({
        type: FILTER_CLIENTE,
        payload: data,
      });
    // } catch (error) {
    //   throw error;
    // }
  };
};

export const filterAbogado = (filtro) => {
  const endpoint = `${URL}abogados?${filtro}?pagina=1&porPagina=50`;
  console.log("URL", endpoint);
  return async (dispatch) => {
    // try {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: FILTER_ABOGADO,
        payload: data,
      });
    // } catch (error) {
    //   throw error;
    // }
  };
};

export const orderAbogados = (value) => {
  const endpoint = `${URL}abogados?field=apellido&order=${value}?pagina=1&porPagina=50`;

  return async (dispatch) => {
    const { data } = await axios.get(endpoint);
    return dispatch({
      type: ORDER_ABOGADOS,
      payload: data,
    });
  };
};

export const orderClientes = (value) => {
  const endpoint = `${URL}clientes?field=apellido&order=${value}?pagina=1&porPagina=50`;

  return async (dispatch) => {
    const { data } = await axios.get(endpoint);
    return dispatch({
      type: ORDER_CLIENTES,
      payload: data,
    });
  };
};

export const deleteAbogado = (cedulaAbogado) => {
  const endpoint = `${URL}abogados/delete`;

  return async (dispatch) => {
    const data = await axios.post(endpoint, { cedulaAbogado });
    console.log("url", endpoint);
    console.log("cedula", cedulaAbogado);
    return dispatch({
      type: DELETE_ABOGADO,
      payload: data,
    });
  };
};

export const deleteCliente = (cedulaCliente) => {
  const endpoint = `${URL}clientes/elimina`;

  return async (dispatch) => {
    const data = await axios.post(endpoint, { cedulaCliente });
    console.log("url", endpoint);
    console.log("cedula", cedulaCliente);
    return dispatch({
      type: DELETE_CLIENTE,
      payload: data,
    });
  };
};

export const getTiposDeCasos = () => {
  const endpoint = `${URL}tiposdecasos`;
  return async (dispatch) => {
    const { data } = await axios.get(endpoint);
    return dispatch({
      type: GET_TIPOSDECASOS,
      payload: data,
    });
  };
};

export const getCasos = () => {
  const endpoint = `${URL}casos?porPagina=20`;
  return async (dispatch) => {
    const { data } = await axios.get(endpoint);
    return dispatch({
      type: GET_CASOS,
      payload: data,
    });
  };
};

export const filterCasos = (filtro) => {
  const endpoint = `${URL}casos?${filtro}`;
  console.log("URL", endpoint);
  return async (dispatch) => {
    // try {
      const { data } = await axios.get(endpoint);

      return dispatch({
        type: FILTER_CASOS,
        payload: data,
      });
    // } catch (error) {
    //   throw error;
    // }
  };
};

export const orderCasos = (value) => {
  const endpoint = `${URL}casos?ordenarPor=${value}&porPagina=20`;

  return async (dispatch) => {
    const { data } = await axios.get(endpoint);
    return dispatch({
      type: ORDER_CASOS,
      payload: data,
    });
  };
};

export const getCasoById = (idCaso) => {
  const endpoint = `${URL}casos/${idCaso}`;
  console.log("URL", endpoint);
  return async (dispatch) => {
    // try {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: GET_CASO_BY_ID,
        payload: data,
      });
    // } catch (error) {
    //   throw error;
    // }
  };
};

export const deleteCaso = (idCaso, fechaFin) => {
  const endpoint = `${URL}casos/findecaso`;

  return async (dispatch) => {
    const data = await axios.post(endpoint, { idCaso, fechaFin });
    console.log("url", endpoint, "id", idCaso, "fechaFin", fechaFin);

    return dispatch({
      type: DELETE_CASO,
      payload: data,
    });
  };
};

export const postCita = (payload) => {
  const endpoint = `${URL}citas`;

  return async (dispatch) => {
    const data = await axios.post(endpoint, payload);
    return dispatch({
      type: POST_CITA,
      payload: data,
    });
  };
};

export const getCitas = () => {
  const endpoint = `${URL}citas?porPagina=20`;
  return async (dispatch) => {
    const { data } = await axios.get(endpoint);
    return dispatch({
      type: GET_CITAS,
      payload: data,
    });
  };
};

export const postConsulta = (payload) => {
  const endpoint = `${URL}consultas`;

  return async (dispatch) => {
    const data = await axios.post(endpoint, payload);
    return dispatch({
      type: POST_CONSULTA,
      payload: data,
    });
  };
};

// Token del local Storage
const loggedUserJSON = window.localStorage.getItem("loggedNoteAppUser");
var config = {};
if (loggedUserJSON) {
  const token = JSON.parse(loggedUserJSON);
  config["headers"] = {
    token: token.tokenUser,
  };
}

export const loginWithProvider = (provider) => {
  return async function (dispatch) {
    try {
      const user = (
        await axios.post(
          `${import.meta.env.VITE_BASE_URL}/auth/fromProvider`,
          provider
        )
      ).data;
      dispatch({ type: LOGIN, payload: user });
    } catch (error) {
      dispatch({ type: LOGIN_FAILED, payload: error.response.data });
    }
  };
};