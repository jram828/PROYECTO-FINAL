import axios from 'axios';

export const SET_AUTHENTICATED = "SET_AUTHENTICATED";
export const SET_USERTOKEN = "SET_USERTOKEN";
export const FILTER_NAME_ABOGADO = "FILTER_NAME_ABOGADO";
export const GET_ABOGADOS = "GET_ABOGADOS";
export const GET_CLIENTES = "GET_CLIENTES";
export const GET_BY_ID_ABOGADO = "GET_BY_ID_ABOGADO";
export const GET_BY_ID_CLIENTE = "GET_BY_ID_CLIENTE";
export const FILTER_NAME_CLIENTE = "FILTER_NAME_CLIENTE";
export const SET_SOURCE = "SET_SOURCE";
export const FILTER_LASTNAME_CLIENTE = "FILTER_LASTNAME_CLIENTE";

//const URL = 'http://localhost:3001/'
const URL = 'https://legaltech-6u3y.onrender.com/'


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



export const getClientes = () => {
  const endpoint = `${URL}clientes`;
  return async (dispatch) => {
      const {data} = await axios.get(endpoint);
          return dispatch({
               type: GET_CLIENTES,
               payload: data,
            });
          };
      };

 export const getAbogados = () => {
  const endpoint = `${URL}abogados`;
  return async (dispatch) => {
      const {data} = await axios.get(endpoint);
          return dispatch({
               type: GET_ABOGADOS,
               payload: data,
            });
          };
      };     

      export const getByIdAbogado = (cedulaAbogado) => {
        const endpoint = `${URL}abogados/cedulaabogado?cedulaAbogado=${cedulaAbogado}`;
        console.log('URL', endpoint)
        return async (dispatch) => {
            try{ 
                const {data} = await axios.get(endpoint);
                return dispatch({
                        type: GET_BY_ID_ABOGADO,
                         payload: data,
                });
            } catch (error) {
                throw error;
            }
        };
    };
    
    
    export const getByIdCliente = (cedulaCliente) => {
      const endpoint = `${URL}clientes/cedulacliente?cedulaCliente=${cedulaCliente}`;
      console.log('URL', endpoint)
      return async (dispatch) => {
          try{ 
              const {data} = await axios.get(endpoint);
              return dispatch({
                      type: GET_BY_ID_CLIENTE,
                       payload: data,
              });
          } catch (error) {
              throw error;
          }
      };
  };      

export const filterlastNameCliente = (apellido) => {
  const endpoint = `${URL}clientes?nombre=${apellido}`;
  console.log('URL',endpoint)
  return async (dispatch) => {
      try{ 
      const {data} = await axios.get(endpoint);
          return dispatch({
               type: FILTER_LASTNAME_CLIENTE,
               payload: data,
          });
      } catch (error) {
          throw error;
      }
      };
      
    }

    export const filterNameCliente = (name) => {
      const endpoint = `${URL}clientes?nombre=${name}`;
      console.log('URL',endpoint)
      return async (dispatch) => {
          try{ 
          const {data} = await axios.get(endpoint);
              return dispatch({
                   type: FILTER_NAME_CLIENTE,
                   payload: data,
              });
          } catch (error) {
              throw error;
          }
          };
          
        }

    export const filterNameAbogado = (name) => {
      const endpoint = `${URL}abogados?nombre=${name}`;
      console.log('URL',endpoint)
      return async (dispatch) => {
          try{ 
          const {data} = await axios.get(endpoint);
              return dispatch({
                   type: FILTER_NAME_ABOGADO,
                   payload: data,
              });
          } catch (error) {
              throw error;
          }
          };
        }
