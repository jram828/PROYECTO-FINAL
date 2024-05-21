import { SET_AUTHENTICATED, 
  SET_USERTOKEN, 
  GET_ABOGADOS, 
  GET_CLIENTES, 
  GET_BY_ID_ABOGADO, 
  GET_BY_ID_CLIENTE, 
  FILTER_ABOGADO, 
  FILTER_CLIENTE,
  SET_SOURCE,
  ORDER_ABOGADOS,
  ORDER_CLIENTES,
  DELETE_ABOGADO,
  DELETE_CLIENTE,
  GET_TIPOSDECASOS,
  GET_CASOS,
  FILTER_CASOS,
  ORDER_CASOS,
  POST_CITA,
   } from "./actions";


let initialState = {
  usuario: {},
  isAuthenticated: false,
  user:{},
  abogados: [],
  clientes: [],
  abogado:{},
  cliente:{},
  tiposDeCasos:[],
  casos:[],
  cita:[],
  source:'cliente',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case SET_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case SET_USERTOKEN:
      return {
        ...state,
        user: action.payload,
      };
     case GET_ABOGADOS:
      return {
        ...state,
        abogados: action.payload
      }
      case GET_CLIENTES:
        return {
          ...state,
          clientes: action.payload
        }
        case GET_BY_ID_ABOGADO:
            return{
                ...state,
                abogado:action.payload
            }
            case GET_BY_ID_CLIENTE:
              return{
                  ...state,
                  cliente:action.payload
              }     
      case FILTER_ABOGADO:
    return {
      ...state,
      abogados:action.payload
    }
    case FILTER_CLIENTE:
    return {
      ...state,
      clientes:action.payload
    }
  
    case SET_SOURCE:
      return {
        ...state,
        source: action.payload,
      };
      case ORDER_ABOGADOS:
        return {
          ...state,
          abogados:action.payload
        }
        
        case ORDER_CLIENTES:
        return {
          ...state,
          clientes:action.payload
        }
        case DELETE_ABOGADO:
          return {
            ...state,
            abogados:action.payload
          }
        case DELETE_CLIENTE:
          return {
            ...state,
            clientes:action.payload
          }
        case GET_TIPOSDECASOS:
          return {
            ...state,
            tiposDeCasos:action.payload
          }
        case GET_CASOS:
          return {
            ...state,
            casos:action.payload
          }
          case FILTER_CASOS:
            return {
              ...state,
              casos:action.payload
            }
          case ORDER_CASOS:
            return {
              ...state,
              casos:action.payload
            }
          case POST_CITA:
            return {
              ...state,
              citas:action.payload
            }   
        
    default:
      return state;
  }
  
};

export default rootReducer