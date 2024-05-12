import { create } from 'zustand';

const userStoreCostumers = create((set) => ({
  costumers: [],
  addCostumer: (newCostumer) => set((state) => ({ costumers: [...state.costumers, newCostumer] })),
}));

export default userStoreCostumers;

{/*import { create } from 'zustand';

const userStoreCostumers = create((set) => ({
    costumers: [],
    addCostumer: (
        cedulaCliente,
        nombre,
        apellido,
        correo,
        telefono,
        calle,
        numero,
        codigoPostal,
        ciudad,
        pais) => set(state => [...state.costumers, {
            cedulaCliente,
            nombre,
            apellido,
            correo,
            telefono,
            calle,
            numero,
            codigoPostal,
            ciudad,
            pais}])

}) )

export default userStoreCostumers*/}