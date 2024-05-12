import { create } from 'zustand';
import { devtools } from 'zustand/middleware';



const userStoreCostumers = create(devtools((set) => ({
  costumers: [],
  setCostumer: (newCostumer) => set( { costumers: newCostumer }),
})));

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