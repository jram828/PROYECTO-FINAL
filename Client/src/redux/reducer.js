import { SET_AUTHENTICATED, 
  SET_USERTOKEN, 
  GET_ABOGADOS, 
  GET_CLIENTES, 
  GET_BY_ID_ABOGADO, 
  GET_BY_ID_CLIENTE, 
  FILTER_NAME_ABOGADO, 
  FILTER_NAME_CLIENTE,
  SET_SOURCE,
  ORDER_ABOGADOS,
  ORDER_CLIENTES,
   } from "./actions";


let initialState = {
  usuario: {},
  isAuthenticated: false,
  user:{},
  abogados: [],
  clientes: [],
  abogado:{},
  cliente:{},
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
      case FILTER_NAME_ABOGADO:
    return {
      ...state,
      abogados:action.payload
    }
    case FILTER_NAME_CLIENTE:
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
        
    default:
      return state;
  }
  
};

export default rootReducer