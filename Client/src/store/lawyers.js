import { create } from 'zustand';

const userStoreLawyers = create((set) => ({
  lawyers: [],
  addLawyer: (newLawyer) => set((state) => ({ lawyers: [...state.lawyers, newLawyer] })),
}));

export default userStoreLawyers;

{/*import { create } from 'zustand';

const userStoreLawyers = create((set) => ({
    lawyers: [],
    addLawyer: (
        cedulaAbogado,
        matricula,
        nombre,
        apellido,
        correo,
        telefono,
        calle,
        numero,
        codigoPostal,
        ciudad,
        pais) => set(state => [...state.lawyers, {
            cedulaAbogado,
            matricula,
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

export default userStoreLawyers*/}