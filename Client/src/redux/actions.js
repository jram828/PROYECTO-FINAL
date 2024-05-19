import axios from 'axios';

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


//const URL = 'http://localhost:3001/'
//const URL = 'https://legaltech-6u3y.onrender.com/'
const URL = 'https://legaltech-develop.onrender.com/'


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
  const endpoint = `${URL}clientes?pagina=1&porPagina=50`;
  return async (dispatch) => {
      const {data} = await axios.get(endpoint);
          return dispatch({
               type: GET_CLIENTES,
               payload: data,
            });
          };
      };

 export const getAbogados = () => {
   const endpoint = `${URL}abogados?pagina=1&porPagina=50`;
   
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


    export const filterCliente = (filtro, inputValue) => {
      const endpoint = `${URL}clientes?${filtro}`;
      console.log('URL',endpoint)
      return async (dispatch) => {
          try{ 
          const {data} = await axios.get(endpoint);
          
              return dispatch({
                   type: FILTER_CLIENTE,
                   payload: data,
              });
          } catch (error) {
              throw error;
          }
          };
          
        }

    export const filterAbogado = (filtro) => {
      const endpoint = `${URL}abogados?${filtro}`;
      console.log('URL',endpoint)
      return async (dispatch) => {
          try{ 
          const {data} = await axios.get(endpoint);
              return dispatch({
                   type: FILTER_ABOGADO,
                   payload: data,
              });
          } catch (error) {
              throw error;
          }
          };
        }


        export const orderAbogados = () => {
          const endpoint = `${URL}abogados?field=apellido&order=asc`;
          
         return async (dispatch) => {
             const {data} = await axios.get(endpoint);
                 return dispatch({
                      type: ORDER_ABOGADOS,
                      payload: data,
                   });
                 };
             };        


             export const orderClientes = () => {
              const endpoint = `${URL}clientes?field=apellido&order=asc`;
              
             return async (dispatch) => {
                 const {data} = await axios.get(endpoint);
                     return dispatch({
                          type: ORDER_CLIENTES,
                          payload: data,
                       });
                     };
                 };

                 export const deleteAbogado = (cedulaAbogado) => {
                  const endpoint = `${URL}abogados/delete`;
                      
                     return async (dispatch) => {
                         const data = await axios.post(endpoint, {cedulaAbogado});
                          console.log('url', endpoint);
                          console.log('cedula', cedulaAbogado)
                             return dispatch({
                                  type: DELETE_ABOGADO,
                                  payload: data,
                               });
                             };
                         };
                         
        
               export const deleteCliente = (cedulaCliente) => {
                     const endpoint = `${URL}clientes/elimina`;
                              
                       return async (dispatch) => {
                          const data = await axios.post(endpoint, {cedulaCliente} );
                          console.log('url', endpoint);
                          console.log('cedula', cedulaAbogado)
                            return dispatch({
                                  type: DELETE_CLIENTE,
                                  payload: data,
                                  });
                            };
                   };             