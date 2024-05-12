import create from 'zustand';
//
const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: {},
  setAuthenticated: (auth) => set({ isAuthenticated: auth }),
  setUser: (user) => set({ user: user }),
}));

export default useAuthStore;
