import create from 'zustand';
import { devtools } from 'zustand/middleware';

const useStore = create(devtools((set) => ({
  usuario: {},
  isAuthenticated: false,
  user: {},
  setAuthenticated: (auth) => set({ isAuthenticated: auth }),
  setUserToken: (userToken) => set({ user: userToken }),
}), 'redux'));

export default useStore;
