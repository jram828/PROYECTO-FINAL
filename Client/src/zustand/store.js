import create from 'zustand';

const useGlobalStore = create((set) => ({
  counter: 0,
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  decrement: () => set((state) => ({ counter: state.counter - 1 })),
}));

// Estado de la sesión del usuario | acciones para iniciar sesión, cerrar sesión, y actualizar la información del usuario.

export default useGlobalStore;
