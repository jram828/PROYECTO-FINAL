/*
import { SET_AUTHENTICATED, SET_USERTOKEN } from "./actions";

let initialState = {
  usuario: {},
  isAuthenticated: false,
  user:{},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_FAV:
    //   return {
    //     ...state,
    //     allCharacters: [...state.allCharacters, action.payload],
    //     myFavorites: [...state.myFavorites, action.payload],
    //   };
    // case REMOVE_FAV:
    //   const myFavoritesFilter = state.myFavorites.filter(
    //     (character) => character.id !== action.payload
    //   );

    //   return { ...state, myFavorites: myFavoritesFilter };
    // case FILTER_CARDS:
    //   if (action.payload.toUpperCase() === "ALL") {
    //     return {
    //       ...state,
    //       myFavorites: state.allCharacters,
    //     };
    //   } else {
    //     const charactersFilter = state.allCharacters.filter(
    //       (character) =>
    //         character.gender.toUpperCase() === action.payload.toUpperCase()
    //     );

    //     return {
    //       ...state,
    //       myFavorites: charactersFilter,
    //     };
    //   }

    // case ORDER_CARDS:
    //   if (action.payload.toUpperCase() === "A") {
    //     return {
    //       ...state,
    //       myFavorites: state.allCharacters.sort((a, b) =>
    //         a.name > b.name ? 1 : -1
    //       ),
    //     };
    //   } else {
    //     return {
    //       ...state,
    //       myFavorites: state.allCharacters.sort((a, b) =>
    //         a.name < b.name ? 1 : -1
    //       ),
    //     };
    //   }
    // case GET_CLIENTE_BY_CEDULA:
    //   return {
    //     ...state,
    //     cliente: action.payload,
    //   };
    // case GET_CLIENTES:
    //   return {
    //     ...state,
    //     clientes: action.payload,
    //   };
    // case SET_CLIENTE:
    //   return {
    //     ...state,
    //     cliente: action.payload,
    //   };
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
    default:
      return state;
  }
};

export default rootReducer;
*/