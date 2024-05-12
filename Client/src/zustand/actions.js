import create from 'zustand';

const useStore = create((set) => ({
  isAuthenticated: false,
  userToken: null,
  setAuth: (auth) => {
    console.log("Verificar autenticacion:", auth);
    set({ isAuthenticated: auth });
  },
  setUserToken: (userToken) => {
    console.log("User token:", userToken);
    set({ userToken });
  },
}));

export default useStore;
